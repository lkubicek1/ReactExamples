import { setup } from "./db/setup";
import { knexInstance } from "./db";
import { User } from "./models/user.model";
import {fetchAllUsersWithPosts, fetchUserByName, fetchUsers, fetchUserWithPosts} from "./services/user.services";
import {Post} from "./models/post.model";
import {fetchPostsByUserId} from "./services/post.service";

async function demo() {
  try {
    // Setup database and seed data
    await setup(knexInstance);

    // Fetch all users and log them
    const users: User[] = await fetchUsers();
    console.log(`Fetched ${users.length} users:`, users);

    // Fetch a user by name and log them
    const userByName: User | undefined = await fetchUserByName(users[0].name);
    console.log(`Fetched user by name '${users[0].name}':`, userByName);

    // Assuming there is a user with id 1 in the seeded data
    const userWithPosts: User | null = await fetchUserWithPosts(users[0].id);
    console.log(`Fetched user with posts by user ID '${users[0].id}':`, userWithPosts);

    // Fetch all users with their posts and log them
    const allUsersWithPosts: User[] = await fetchAllUsersWithPosts();
    console.log('Fetched all users with their posts:', allUsersWithPosts);

    // Fetch posts by a user id and log them
    const postsByUserId: Post[] = await fetchPostsByUserId(users[0].id);
    console.log(`Fetched posts by user ID 1:`, postsByUserId);

  } catch (error) {
    console.error('Error running the demo:', error);
  }
}

// Run the demo
console.log('Running the demo...');
demo().then(() => console.log('Demo complete.'));
