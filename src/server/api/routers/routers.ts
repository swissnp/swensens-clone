
import { hash } from "argon2";
import { TRPCError } from "@trpc/server";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { signUpSchema } from "~/common/validation/auth";

export const signUpRouter = createTRPCRouter({
  signUp: publicProcedure
    .input(signUpSchema)
    .mutation(async ({ input, ctx }) => {
      const { email, password, sex, telephone, firstname, lastname, birthDay } =
        input;
      const hashedPassword = await hash(password);
      const exists = await ctx.prisma.user.findFirst({
        where: { email: email },
      });

      if (exists) {
        throw new TRPCError({
          code: "CONFLICT",
          message: "User already exists.",
        });
      }
      const result = await ctx.prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          sex,
          telephone,
          firstname,
          lastname,
          birthDay,
        },
      });
      return {
        status: 201,
        message: "Account created successfully",
        result: result.email,
      };
    }),
});
