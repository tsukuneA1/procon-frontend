import { PostCard } from '@/components/post-card';
import { MainLayout } from '@/layouts/main/layout';
import type { Post } from '@/types/post';
import { v4 as uuidv4 } from 'uuid';

async function fetchPosts(): Promise<Post[]> {
  try {
    const res = await fetch('http://127.0.0.1:3000/api/v1/posts');
    if (!res.ok) {
      throw new Error(`HTTP Error! status: ${res.status}`);
    }

    const posts = await res.json();

    return posts;
  } catch {
    return [];
  }
}

export default async function Home() {
  const posts = await fetchPosts();

  return (
    <MainLayout>
      {posts.map((post) => (
        <PostCard key={uuidv4()} post={post} />
      ))}
    </MainLayout>
  );
}
