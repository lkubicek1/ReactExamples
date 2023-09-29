# Typescript/Knex Demo

This is a demonstration project showcasing the use of TypeScript with a relational database to manage user data and posts.

## Project Structure

- `src/`: Contains the source files.
    - `services/`: Contains service files like `user.service.ts` and `post.service.ts`.
    - `models/`: Contains model definitions like `user.model.ts` and `post.model.ts`.
    - `db.ts`: Initializes and exports the `knexInstance` for database interactions.
- `tsconfig.json`: Contains TypeScript configuration.
- `package.json`: Defines the project dependencies and scripts.

## Prerequisites

- Node.js

## Setup and Installation

1. Clone the repository to your local machine.

   ```sh
   git clone https://github.com/lkubicek1/js-examples.git
   cd js-examples/knex-ts-demo
   ```

2. Install the dependencies.

   ```sh
   npm install
   ```

3. Setup your database and update the database connection details in `src/db.ts`.

4. Compile TypeScript to JavaScript.

   ```sh
   npm run build
   ```

5. Start the application.

   ```sh
   npm start
   ```

## Configuration

### TypeScript

Ensure TypeScript is configured to support ES Modules. Update `tsconfig.json` as follows:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "NodeNext",
    "moduleResolution": "node",
    "esModuleInterop": true
  }
}
```

### Database Connection

The database connection details are in `src/db/index.ts`.  The project uses in-memory SqLite for demonstration purposes.

## Usage

### Fetching User by Name

```typescript
import { fetchUserByName } from './services/user.service';

const user = await fetchUserByName('John Doe');
console.log(user);
```

### Fetching Posts by User ID

```typescript
import { fetchPostsByUserId } from './services/post.service';

const posts = await fetchPostsByUserId(1);
console.log(posts);
```


## License

This project is licensed under the Apache 2.0 License - see the [LICENSE.md](LICENSE.md) file for details.
