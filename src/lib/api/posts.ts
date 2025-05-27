import type { Post } from '@/types/post';

export async function fetchUserPosts(userId: string): Promise<Post[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/posts/users/${userId}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch posts for user id: ${userId}`);
  }

  return res.json();
}