'use client';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { AvatarImage } from '@radix-ui/react-avatar';
import { CircleEllipsis, Copy, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function PostForm() {
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    const res = await fetch('http://localhost:3000/api/v1/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        post: {
          content,
          user_id: 1,
        },
      }),
    });

    if (res.ok) {
      setContent('');
      setSuccess(true);
      setError('');
    } else {
      const data = await res.json();
      setError(data.error);
    }
  };

  return (
    <div className='flex min-h-screen flex-col'>
      {/* ヘッダー */}
      <div className='flex items-center justify-between border-b px-4 py-4'>
        <div className='flex items-center gap-3'>
          <Link href='/'>
            <X />
          </Link>
          <h2 className='font-bold text-lg'>新規スレッド</h2>
        </div>
        <div className='flex items-center gap-3'>
          <Copy />
          <CircleEllipsis />
        </div>
      </div>

      {/* 投稿内容とボタン */}
      <div className='mx-auto flex w-full max-w-xl flex-1 flex-col p-4'>
        <div className='flex items-start gap-4'>
          <Avatar>
            <AvatarImage src='https://robohash.org/dolorestotamdolor.png?size=300x300&set=set1' />
            <AvatarFallback>{'Ro'}</AvatarFallback>
          </Avatar>
          <div className='w-full'>
            <div className='font-semibold text-zinc-800 dark:text-zinc-100'>
              {'Rodney Ruecker'}
            </div>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder='今どうしてる？'
              className='w-full resize-none border-none text-lg outline-none'
              rows={3}
            />
          </div>
        </div>

        {error && <p className='mt-2 text-red-500'>{error}</p>}
        {success && <p className='mt-2 text-green-500'>投稿しました！</p>}

        <div className='mt-4 flex justify-end'>
          <button
            type='submit'
            onClick={handleSubmit}
            disabled={!content.trim()}
            className='rounded-lg bg-blue-500 px-4 py-2 text-white disabled:bg-blue-200'
          >
            投稿
          </button>
        </div>

        {/* 下部固定 */}
        <div className='mt-auto rounded-lg bg-gray-100 p-4 text-sm text-zinc-600'>
          あなたのフォロワーは返信・引用できます
        </div>
      </div>
    </div>
  );
}
