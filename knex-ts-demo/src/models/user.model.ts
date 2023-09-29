import {Post} from "./post.model";

export interface User {
  id: string;
  name: string;
  email: string;
  posts?: Post[];
}
