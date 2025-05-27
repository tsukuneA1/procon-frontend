import { PostCard } from '@/components/post-card';
import { MainLayout } from '@/layouts/main/layout';
import type { Post } from '@/types/post';
import { v4 as uuidv4 } from 'uuid';
import { UserProfile } from '@/components/userprofile';
import { mockUser } from '@/const/mockUser';
import { fetchUser } from '@/lib/api/user';
import { fetchUserPosts } from '@/lib/api/posts';

type Props = {
  params: {
    id: string;
  };
};
export default async function Page({ params }: Props) {
  const userId = params.id;

  const user = await fetchUser(userId);
  const posts = await fetchUserPosts(userId);

  return (
    <MainLayout>
      <UserProfile {...mockUser} />
      {posts.map((post) => (
        <PostCard key={uuidv4()} post={post} />
      ))}
    </MainLayout>
  );
}
