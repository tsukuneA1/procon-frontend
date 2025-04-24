import { PostCard } from '@/components/post-card';
import { MainLayout } from '@/layouts/main/layout';
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
  return (
    <MainLayout>
      {Array.from({ length: 10 }).map(() => (
        <PostCard key={uuidv4()} />
      ))}
      <p>test</p>
      <PostCard />
    </MainLayout>
  );
}
