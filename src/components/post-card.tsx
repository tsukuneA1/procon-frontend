import { Card, CardContent, CardHeader } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { MessageCircle, Heart, Repeat2 } from 'lucide-react';
import Link from 'next/link';
import type { Post } from '@/types/post';

export const PostCard = ({ post }: { post: Post }) => {
  return (
    <Link href={`/post/${post.id}`}>
      <Card className='w-2xl rounded-none p-4'>
        <div className='gap-4'>
          <div className='flex flex-1 flex-col'>
            <CardHeader className='flex items-center p-0 pb-2 font-semibold text-sm'>
              <Avatar>
                <AvatarImage src={post.user.image} />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <span>{post.user.name}</span>
            </CardHeader>
            <CardContent className='p-0 text-base text-zinc-800 dark:text-zinc-200'>
              {post.content}
            </CardContent>
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
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};
