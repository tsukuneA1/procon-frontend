// const/mockUser.ts
import type { UserProfileProps } from '@/types/profile';

export const mockUser: UserProfileProps = {
  userId: '1',
  user: {
    name: 'John Doe',
    username: 'johndoe',
    image: '/images/profile.jpg',
    cover_image: '/images/cover.jpg',
    followCount: 123,
    followerCount: 456,
    bio: 'This is a sample bio for John Doe.',
    joinDate: '2022-01-01',
  },
};
