import express from 'express';
import { PrismaClient } from '@prisma/client' ;

// express router
const router = express.Router() ;

// linking the ORM prisma
const prisma = new PrismaClient();

// Admin should be able to get a user's posts
router.get("/user/:id/posts", async (req, res, next) => {
    try {
      const usersPosts = await prisma.user.findUnique({
        where: {
          uId: Number(req.params.id),
        },
        include: {
          postId: {
            where: {
              published: true,
            },
          },
        },
});
      const posts = usersPosts?.postId;
      
      res.json({ posts });
} catch (error: any) {
      next(error.message);
}
});

module.exports = router ;