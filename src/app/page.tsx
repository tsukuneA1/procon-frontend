import { PostCard } from '@/components/post-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MainLayout } from '@/layouts/main/layout';
import type { Post } from '@/types/post';
import type { User } from '@/types/users';
import Link from 'next/link';
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

async function fetchUser(): Promise<User> {
  try {
    const res = await fetch('http://127.0.0.1:3000/api/v1/users/1');
    if (!res.ok) {
      throw new Error(`HTTP Error! status: ${res.status}`);
    }

    const user = await res.json();

    return user;
  } catch {
    return {
      id: 100000,
      name: 'demo',
      image: '..',
      created_at: '..',
      email: '..',
      password: '..',
      profile: {
        id: 100000,
        user_id: 100000,
        bio: '..',
        created_at: '.',
        updated_at: '.',
      },
    };
  }
}

export default async function Home() {
  const posts = await fetchPosts();
  const user = await fetchUser();

  return (
    <MainLayout>
      <Link href={'posts/new'}>
        <div className='mx-auto w-2xl space-y-6 border p-4'>
          <div className='flex items-start gap-4 '>
            <Avatar>
              <AvatarImage src={user.image} />
              <AvatarFallback>{user.name[0].toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <div className='font-semibold text-zinc-800 dark:text-zinc-100'>
                {user.name}
              </div>

              <p className='mt-1 whitespace-pre-wrap text-base text-zinc-400 dark:text-zinc-200'>
                今なにしてる？
              </p>
            </div>
          </div>
        </div>
      </Link>

      {posts.map((post) => (
        <PostCard key={uuidv4()} post={post} />
      ))}
    </MainLayout>
  );
}
