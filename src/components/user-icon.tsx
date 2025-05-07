import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import Link from 'next/link';
import type { Post } from '../types/post';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { UserPlus, SquareArrowOutUpRight } from 'lucide-react';

export const UserIcon = ({ post }: { post: Post }) => {
  switch (post.is_following) {
    case true:
      return (
        <Link href={`/users/${post.post.user_id}`}>
          <Avatar className='top-2 border-1 border-gray-300'>
            <AvatarImage src={post.post.user.image} />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </Link>
      );
    case false:
      return (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant='ghost' size='icon' className='top-2 rounded-full'>
              <Avatar className='border border-gray-300'>
                <AvatarImage src={post.post.user.image} />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align='start'
            className='m-0 flex flex-col divide-y p-0'
          >
            <Button variant='ghost' size='sm' className='flex justify-between'>
              <span>フォロー</span>
              <UserPlus />
            </Button>
            <Button variant='ghost' size='sm' className='flex justify-between'>
              <span>プロフィールページ</span>
              <SquareArrowOutUpRight />
            </Button>
          </PopoverContent>
        </Popover>
      );
  }
};
