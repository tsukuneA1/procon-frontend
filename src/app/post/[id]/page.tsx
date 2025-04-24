import { PostDetail } from '@/components/post-detail';

export default async function Page() {
  const post = {
    id: '1',
    content: 'これはサンプル投稿です',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    author: {
      name: 'sample_user',
      image: '/avatar.png',
    },
    replies: [],
  };

  return <PostDetail post={post} />;
}
