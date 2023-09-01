import { PrismaClient } from '@prisma/client' ;
import { ALL } from 'dns';

// linking the ORM prisma
const prisma = new PrismaClient();

export class PostModel {

    getAllPosts(){
        const posts = prisma.post.findMany({
            include: {creator: true} 
        });
        return posts;

    }

    // get a post by id
    getPostById(id: number){
        const sendingId = id ;
        const post = prisma.post.findUnique(
            {
                where: { poId: sendingId },
                include: {creator: true}
            }
        );
        return post;
    }

    //create a post
    createPost(submitdata: any) {
        const result = prisma.post.create({
            data: { ...submitdata },
          });
          return result ;
    }

    // update a specific post
    updatePost(id: number, submitdata: any) {
        const result = prisma.post.update({
            where: {
              poId: id,
            },
            data: submitdata,
        });
        return result ;

    }

    // delete a specific post
    deletePost(id: number){
        const result = prisma.post.delete({
            where: {
                poId: id,
            },
        });
        return result;
    }

    // search and pagination
    searchPost(searcher: string){
        const results = prisma.post.findMany({
            // skip: 0,
            take: ALL,
            where: {
                title: {
                    contains: searcher,
                } 
            },
            include: {creator: true} 
        });
        return results;
    } 





}