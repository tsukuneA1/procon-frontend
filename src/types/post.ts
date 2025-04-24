import type { Reply } from './reply';

export type Post = {
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  author: {
    name: string;
    image: string;
  };
  replies: Reply[];
};
