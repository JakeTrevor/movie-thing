import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const groupRouter = createTRPCRouter({
  getByUser: protectedProcedure.query(async ({ ctx }) => {
    const user = ctx.session.user;

    return await ctx.prisma.membership
      .findMany({
        where: { userId: user.id },
        select: {
          group: true,
        },
      })
      .then((list) => list.map((e) => e.group));
  }),

  create: protectedProcedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .mutation(async ({ ctx, input: { name } }) => {
      const user = ctx.session.user;

      const alreadyExists = await ctx.prisma.group.findUnique({
        where: { name },
      });

      if (alreadyExists) throw new Error("This group already exists!");

      return await ctx.prisma.group.create({
        data: {
          name,
          Members: {
            create: [
              {
                userId: user.id,
              },
            ],
          },
        },
      });
    }),
});
