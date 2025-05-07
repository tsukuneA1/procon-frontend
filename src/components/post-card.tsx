import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from './ui/drawer';
import { getTimeDistance } from '../lib/utils';
import { UserIcon } from './user-icon';
import {
  Heart,
  MessageCircle,
  MoreHorizontal,
  Repeat2,
  Share,
} from 'lucide-react';
import Link from 'next/link';
import type { Post } from '@/types/post';

export const PostCard = ({ post }: { post: Post }) => {
  return (
    <Card className='w-2xl rounded-none p-4 pb-2'>
      <div className='flex gap-4'>
        <UserIcon post={post} />
        <div className='flex flex-1 flex-col'>
          <CardHeader className='flex items-end p-0 pb-0.5'>
            <Link href={`/users/${post.post.user_id}`}>
              <span className='font-semibold text-sm'>
                {post.post.user.name}
              </span>
            </Link>
            <span className='text-gray-400 text-xs'>
              {getTimeDistance(post.post.created_at)}
            </span>
            <Drawer>
              <DrawerTrigger className='ml-auto text-gray-500'>
                <Button variant='ghost' size='icon'>
                  <MoreHorizontal className='h-4 w-4' />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerTitle />
                hoge
              </DrawerContent>
            </Drawer>
          </CardHeader>
          <Link href={`/post/${post.id}`}>
            <CardContent className='p-0 text-base text-zinc-800 dark:text-zinc-200'>
              {post.post.content}
            </CardContent>
          </Link>
          <div className='mt-3 flex gap-4 text-sm text-zinc-500'>
            <Button
              variant='ghost'
              size='sm'
              className='flex items-center gap-1 px-2'
            >
              <Heart className='h-4 w-4' />
              {post.like_num}
            </Button>
            <Button
              variant='ghost'
              size='sm'
              className='flex items-center gap-1 px-2'
            >
              <MessageCircle className='h-4 w-4' />
              {post.reply_num}
            </Button>
            <Button
              variant='ghost'
              size='sm'
              className='flex items-center gap-1 px-2'
            >
              <Repeat2 className='h-4 w-4' />
              {post.repost_num}
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
