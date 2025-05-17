export type Post = {
  id: number;
  content: string;
  created_at: string;
  updated_at: string;
  user_id: number;
  reply_to_id: number | null;
  user: {
    id: number;
    name: string;
    image: string;
    is_following: boolean;
  };
  replies_count: number;
  likes_count: number;
  reposts_count: number;
};
