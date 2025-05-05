import { Card, CardContent, CardHeader } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { getTimeDistance } from '../lib/utils';
import {
  MessageCircle,
  Heart,
  Repeat2,
  MoreHorizontal,
  Share,
} from 'lucide-react';
import Link from 'next/link';
import type { Post } from '@/types/post';

export const PostCard = ({ post }: { post: Post }) => {
  return (
    <Card className='w-2xl rounded-none p-4'>
      <div className='flex gap-4'>
        <Link href={`/users/${post.user_id}`}>
          <Avatar className='top-2px border-1 border-gray-300'>
            <AvatarImage src={post.user.image} />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </Link>
        <div className='flex flex-1 flex-col'>
          <CardHeader className='flex items-end p-0 pb-0.5'>
            <Link href={`/users/${post.user_id}`}>
              <span className='font-semibold text-sm'>{post.user.name}</span>
            </Link>
            <span className='text-gray-400 text-xs'>
              {getTimeDistance(post.created_at)}
            </span>
            <Link
              href={`/postinfo/${post.id}`}
              className='ml-auto text-gray-500'
            >
              <MoreHorizontal className='h-4 w-4' />
            </Link>
          </CardHeader>
          <Link href={`/post/${post.id}`}>
            <CardContent className='p-0 text-base text-zinc-800 dark:text-zinc-200'>
              {post.content}
            </CardContent>
          </Link>
          <div className='mt-3 flex gap-4 text-sm text-zinc-500'>
            <Button
              variant='ghost'
              size='sm'
              className='flex items-center gap-1 px-2'
            >
              <Heart className='h-4 w-4' />
              12
            </Button>
            <Button
              variant='ghost'
              size='sm'
              className='flex items-center gap-1 px-2'
            >
              <MessageCircle className='h-4 w-4' />3
            </Button>
            <Button
              variant='ghost'
              size='sm'
              className='flex items-center gap-1 px-2'
            >
              <Repeat2 className='h-4 w-4' />1
            </Button>
            <Button
              variant='ghost'
              size='sm'
              className='flex items-center gap-1 px-2'
            >
              <Share />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};
