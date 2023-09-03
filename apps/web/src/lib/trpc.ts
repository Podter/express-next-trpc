import { httpBatchLink, loggerLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import type { AppRouter } from "api";
import superjson from "superjson";

const apiHost = process.env.NEXT_PUBLIC_API_HOST ?? "http://localhost:3001";

export const trpc = createTRPCNext<AppRouter>({
  config() {
    return {
      transformer: superjson,
      links: [
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === "development" ||
            (opts.direction === "down" && opts.result instanceof Error),
        }),
        httpBatchLink({
          url: `${apiHost}/trpc`,
        }),
      ],
    };
  },
  ssr: true,
});
