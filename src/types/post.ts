export type Post = {
  id: string;
  content: string;
  created_at: string;
  updated_at: string;
  user_id: number;
  reply_to_post_id: number;
  user: {
    id: number;
    name: string;
    image: string;
    is_following: boolean;
  };
  reply_num: number;
  like_num: number;
  repost_num: number;
};
