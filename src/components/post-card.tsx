'use client';

import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from './ui/drawer';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { getTimeDistance } from '../lib/utils';
import { UserIcon } from './user-icon';
import {
  Bookmark,
  EyeOff,
  Heart,
  Link2,
  MessageCircle,
  MessageSquareOff,
  MoreHorizontal,
  Repeat2,
  Share,
  ShieldAlert,
  UserRoundX,
} from 'lucide-react';
import Link from 'next/link';
import { useMediaQuery } from '@mui/material';
import type { Post } from '@/types/post';

export const PostCard = ({ post }: { post: Post }) => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <Card className='w-sm rounded-none p-4 pb-2 sm:w-2xs md:w-2xl'>
      <div className='flex gap-4'>
        <UserIcon post={post} />
        <div className='flex flex-1 flex-col'>
          <CardHeader className='flex items-center p-0 pb-0.5'>
            <Link href={`/users/${post.user_id}`}>
              <span className='font-semibold text-sm'>{post.user.name}</span>
            </Link>
            <span className='text-gray-400 text-xs'>
              {getTimeDistance(post.created_at)}
            </span>
            {isDesktop ? (
              <Drawer>
                <DrawerTrigger asChild className='ml-auto text-gray-500'>
                  <Button variant='ghost' size='icon'>
                    <MoreHorizontal className='h-4 w-4' />
                  </Button>
                </DrawerTrigger>
                <DrawerContent className='flex flex-col bg-neutral-200 p-4'>
                  <DrawerTitle className='mt-3' />
                  <div className='m-1 flex flex-col divide-y rounded-md bg-white'>
                    <Button
                      variant='ghost'
                      size='sm'
                      className='flex justify-between'
                    >
                      <span>保存</span>
                      <Bookmark />
                    </Button>
                    <Button
                      variant='ghost'
                      size='sm'
                      className='flex justify-between'
                    >
                      <span>興味なし</span>
                      <EyeOff />
                    </Button>
                  </div>
                  <div className='m-1 flex flex-col divide-y rounded-md bg-white'>
                    <Button
                      variant='ghost'
                      size='sm'
                      className='flex justify-between'
                    >
                      <span>リンクをコピー</span>
                      <Link2 />
                    </Button>
                  </div>
                  <div className='m-1 flex flex-col divide-y rounded-md bg-white'>
                    <Button
                      variant='ghost'
                      size='sm'
                      className='flex justify-between'
                    >
                      <span>ミュート</span>
                      <MessageSquareOff />
                    </Button>
                    <Button
                      variant='ghost'
                      size='sm'
                      className='flex justify-between text-red-500'
                    >
                      <span>ブロック</span>
                      <UserRoundX />
                    </Button>
                    <Button
                      variant='ghost'
                      size='sm'
                      className='flex justify-between text-red-500'
                    >
                      <span>報告する</span>
                      <ShieldAlert />
                    </Button>
                  </div>
                </DrawerContent>
              </Drawer>
            ) : (
              <Popover>
                <PopoverTrigger asChild className='ml-auto text-gray-500'>
                  <Button variant='ghost' size='icon'>
                    <MoreHorizontal className='h-4 w-4' />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  align='end'
                  className='m-0 flex flex-col divide-y p-0'
                >
                  <div className='m-1 flex flex-col divide-y rounded-md bg-white'>
                    <Button
                      variant='ghost'
                      size='sm'
                      className='flex justify-between'
                    >
                      <span>保存</span>
                      <Bookmark />
                    </Button>
                    <Button
                      variant='ghost'
                      size='sm'
                      className='flex justify-between'
                    >
                      <span>興味なし</span>
                      <EyeOff />
                    </Button>
                  </div>
                  <div className='m-1 flex flex-col divide-y rounded-md bg-white'>
                    <Button
                      variant='ghost'
                      size='sm'
                      className='flex justify-between'
                    >
                      <span>リンクをコピー</span>
                      <Link2 />
                    </Button>
                  </div>
                  <div className='m-1 flex flex-col divide-y rounded-md bg-white'>
                    <Button
                      variant='ghost'
                      size='sm'
                      className='flex justify-between'
                    >
                      <span>ミュート</span>
                      <MessageSquareOff />
                    </Button>
                    <Button
                      variant='ghost'
                      size='sm'
                      className='flex justify-between text-red-500'
                    >
                      <span>ブロック</span>
                      <UserRoundX />
                    </Button>
                    <Button
                      variant='ghost'
                      size='sm'
                      className='flex justify-between text-red-500'
                    >
                      <span>報告する</span>
                      <ShieldAlert />
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            )}
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
