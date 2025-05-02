export type Post = {
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  user_id: number;
  status: string;
  user: {
    id: number;
    name: string;
    image: string;
  };
};
