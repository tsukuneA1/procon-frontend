import { PostCard } from '@/components/post-card';
import { MainLayout } from '@/layouts/main/layout';

export default function Home() {
  return (
    <MainLayout>
      {Array.from({ length: 10 }).map((_, index) => (
        <PostCard key={index} />
      ))}
      <PostCard />
    </MainLayout>
  );
}
