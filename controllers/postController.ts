import { PostModel } from  '../models/PostModel' ;




export class PostController {
    // a protected model method
     #model ;


    constructor() {
        this.#model = new PostModel() ;
    }

    //  get all posts
    getAllPosts() {
        const datas = this.#model.getAllPosts() ;
        return datas ;
    }

    // get a post by id 
    getPostById(id: number){
        const data = this.#model.getPostById(id) ;
        return data ;

    }

    // create a post 
    createPost(datasending: any){
        const result = this.#model.createPost(datasending) ;
        return result; 
    }

    // update a specific post
    updatePost(id: number, datasending: any) {
        const result = this.#model.updatePost(id,datasending) ;
        return result;
    }

    //  delete a specific post
    deletePost(id: number){
        const result = this.#model.deletePost(id) ;
        return result;
    }

    //  search a post
    searchPost(filter: any){
        const results = this.#model.searchPost(filter);
        return results;
    }



}