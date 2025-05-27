export type UserProfileProps = {
  userId: string;
  user: {
    name: string;
    username: string;
    image: string;
    cover_image: string;
    followCount: number;
    followerCount: number;
    bio: string;
    joinDate: string;
  };
};
