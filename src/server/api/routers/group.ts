import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const groupRouter = createTRPCRouter({
  getByUser: protectedProcedure.query(async ({ ctx }) => {
    const user = ctx.session.user;

    return await ctx.prisma.vote
      .findMany({
        where: {
          voterId: user.id,
        },
        select: {
          movie: {
            select: {
              forGroup: true,
            },
          },
        },
      })
      .then((list) => list.map((e) => e.movie.forGroup));
  }),

  create: protectedProcedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .mutation(async ({ ctx, input: { name } }) => {
      const alreadyExists = await ctx.prisma.group.findUnique({
        where: { name },
      });

      if (alreadyExists) throw new Error("This group already exists!");

      return await ctx.prisma.group.create({
        data: { name },
      });
    }),
});
