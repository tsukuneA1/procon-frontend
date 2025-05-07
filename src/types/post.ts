export type Post = {
  id: string;
  post: {
    id: string;
    content: string;
    created_at: string;
    updated_at: string;
    user_id: number;
    status: string;
    user: {
      id: number;
      name: string;
      image: string;
    };
  };
  like_num: number;
  reply_num: number;
  repost_num: number;
  is_following: boolean;
};
