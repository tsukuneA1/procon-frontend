import { Header } from '@/components/layout/main/header';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <main className='mx-auto flex w-full max-w-3xl flex-grow flex-col items-center p-8'>
        {children}
      </main>
    </div>
  );
};
