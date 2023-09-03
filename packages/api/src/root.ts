import { router } from "./trpc";

import { greetRouter } from "./router/greet";

export const appRouter = router({
  greet: greetRouter,
});

export type AppRouter = typeof appRouter;
