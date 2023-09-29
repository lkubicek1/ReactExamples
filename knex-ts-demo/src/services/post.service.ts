import {knexInstance} from "../db";
import {Post} from '../models/post.model';

export async function fetchPostsByUserId(userId: string): Promise<Post[]> {
    return knexInstance('posts').where({userId});
}
