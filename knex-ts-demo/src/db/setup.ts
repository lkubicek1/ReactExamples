import {Knex} from "knex";
import {faker} from "@faker-js/faker";
import {Post} from "../models/post.model";

export const setup = async (knex: Knex): Promise<void> => {
    console.log('Creating users table...');
    await knex.schema.createTable('users', (table) => {
        table.string('id').primary();
        table.string('name');
        table.string('email');
    });

    console.log('Creating posts table...');
    await knex.schema.createTable('posts', (table) => {
        table.string('id').primary();
        table.string('title');
        table.string('content');
        table.string('userId').references('users.id');
    });

    await seedDatabase(knex);
};

const seedDatabase = async (knex: Knex) => {
    // Generate a random number of users between 5 and 30
    const numUsers = Math.floor(Math.random() * 26) + 5;

    const users = Array.from({ length: numUsers }, () => ({
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        email: faker.internet.email(),
    }));

    // Insert users and get their IDs
    const userIds: string[] = await knex('users').insert(users).returning('id');

    const posts: Post[] = [];

    // For each user, generate a random number of posts between 3 and 10
    for(const userId of userIds) {
        const numPosts = Math.floor(Math.random() * 8) + 3;
        const userPosts = Array.from({ length: numPosts }, () => ({
            id: faker.string.uuid(),
            title: faker.lorem.sentence(),
            content: faker.lorem.paragraph(),
            userId,
        }));
        posts.push(...userPosts);
    }

    console.log('Posts: ', posts);

    // Insert all posts
    await knex('posts').insert(posts);
};
