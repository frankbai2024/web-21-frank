import { getPosts } from "../database/database.js";


export const refreshPostData = async () => {
    const posts = await getPosts();
    console.log("posts", posts);
}