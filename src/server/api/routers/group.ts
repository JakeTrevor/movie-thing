import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

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
});
