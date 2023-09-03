import { router, publicProcedure } from "../trpc";
import { z } from "zod";

export const greetRouter = router({
  hello: publicProcedure
    .input(z.string().optional())
    .output(z.string())
    .query(({ input }) => `Hello, ${input ?? "world"}!`),

  bye: publicProcedure
    .input(z.string().optional())
    .output(z.string())
    .query(({ input }) => `Goodbye, ${input ?? "world"}!`),
});
