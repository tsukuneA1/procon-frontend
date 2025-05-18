import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Mail, CalendarDays } from 'lucide-react';
import type { UserProfileProps } from '@/types/profile.ts';

export const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div className='flex min-h-screen w-full flex-col items-center bg-gray-100'>
      <div className='flex w-full items-center justify-between bg-black p-3 text-white'>
        <h1>プロフィール</h1>
      </div>
      <Card className='w-full rounded-none bg-white'>
        <div className='relative'>
          <Avatar className='h-50 w-full rounded-none'>
            <AvatarImage src={user.cover_image} alt={user.name} />
            <AvatarFallback className='rounded-none'>
              {user.name[0]}
            </AvatarFallback>
          </Avatar>
          <Avatar className='-bottom-28 absolute left-4 size-15'>
            <AvatarImage src={user.image} alt={user.name} />
            <AvatarFallback>{user.name[0]}</AvatarFallback>
          </Avatar>
        </div>
        <CardContent className='mt-8 p-4'>
          <div className='mb-2 flex items-center justify-end'>
            <div className='flex gap-2'>
              <Button variant='outline'>
                <Mail />
              </Button>
              <Button variant='default'>フォローする</Button>
            </div>
          </div>
          <h2 className='font-bold text-2xl '>{user.name}</h2>
          <p className='text-gray-500'>@{user.username}</p>
          <p className='mt-2'>{user.bio}</p>

          <p className='mt-2 flex text-gray-500'>
            <CalendarDays className='mr-2' />
            {user.joinDate}からXを利用しています
          </p>
          <div className='mt-2 flex gap-4 text-gray-700'>
            <span>{user.followCount} フォロー中</span>
            <span>{user.followerCount} フォロワー</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
