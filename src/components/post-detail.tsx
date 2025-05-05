'use client';

import { useState } from 'react';
import type { Post } from '@/types/post';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import type { Reply } from '@/types/reply';
import Link from 'next/link';

export const PostDetail = ({ post }: { post: Post }) => {
  const [replies, setReplies] = useState<Reply[]>([]);
  const [replyText, setReplyText] = useState('');

  const handleReply = () => {
    if (!replyText.trim()) return;
    const newReply: Reply = {
      id: `${Date.now()}`,
      content: replyText,
      createdAt: new Date().toISOString(),
      author: {
        name: 'you',
        image: '/vercel.svg',
      },
    };
    setReplies([newReply, ...replies]);
    setReplyText('');
  };

  return (
    <div className='mx-auto max-w-2xl space-y-6 p-4'>
      <div className='flex items-start gap-4 '>
        <Avatar>
          <AvatarImage src={post.user.image} />
          <AvatarFallback>{post.user.name[0].toUpperCase()}</AvatarFallback>
        </Avatar>
        <div>
          <Link href={`../users/${post.user_id}`}>
            <div className='font-semibold text-zinc-800 dark:text-zinc-100'>
              {post.user.name}
            </div>
          </Link>

          <p className='mt-1 whitespace-pre-wrap text-base text-zinc-900 dark:text-zinc-200'>
            {post.content}
          </p>
          <div className='mt-2 text-sm text-zinc-500'>
            {new Date(post.created_at).toLocaleString()}
          </div>
        </div>
      </div>

      <div className='flex gap-2'>
        <Input
          placeholder='リプライを書く...'
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
        />
        <Button onClick={handleReply}>返信</Button>
      </div>

      <div className='space-y-4'>
        {replies.map((reply) => (
          <div key={reply.id} className='flex items-start gap-3'>
            <Avatar>
              <AvatarImage src={reply.author.image} />
              <AvatarFallback>
                {reply.author.name[0].toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className='font-semibold'>@{reply.author.name}</div>
              <p className='text-zinc-800 dark:text-zinc-100'>
                {reply.content}
              </p>
              <div className='text-sm text-zinc-500'>
                {new Date(reply.createdAt).toLocaleString()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
