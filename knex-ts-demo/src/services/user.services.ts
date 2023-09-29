import {knexInstance} from "../db";
import {User} from '../models/user.model';
import {Post} from "../models/post.model";

export async function fetchUsers(): Promise<User[]> {
    return knexInstance('users').select();
}

export async function fetchUserByName(name: string): Promise<User | undefined> {
    return knexInstance('users').where({ name }).first();
}

export async function fetchUserWithPosts(userId: string): Promise<User | null> {
    const rows = await knexInstance('users')
        .select('users.*', 'posts.id as postId', 'posts.title', 'posts.content')
        .leftJoin('posts', 'users.id', 'posts.userId')
        .where('users.id', userId);

    if (rows.length === 0) return null;

    console.log(rows);

    return {
        id: rows[0].id, name: rows[0].name, email: rows[0].email, posts: rows.map(row => ({
            id: row.id, title: row.title, content: row.content
        })) as Post[]
    };
}

export async function fetchAllUsersWithPosts(): Promise<User[]> {
    const rows = await knexInstance('users')
        .select('users.*', 'posts.id as postId', 'posts.title', 'posts.content')
        .leftJoin('posts', 'users.id', 'posts.userId');

    const usersMap: { [id: string]: User } = {};

    rows.forEach(row => {
        if (!usersMap[row.id]) {
            usersMap[row.id] = {
                id: row.id, name: row.name, email: row.email, posts: []
            };
        }

        if (row.postId) {
            usersMap[row.id].posts?.push({
                id: row.id, title: row.title, content: row.content
            } as Post);
        }
    });

    return Object.values(usersMap);
}
