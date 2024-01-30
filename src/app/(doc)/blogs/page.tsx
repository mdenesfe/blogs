// Page.tsx
import React from 'react';
import Profile from './profile'; 
import Bookmarks from './bookmarks';
import FtPrintf from './ftPrintf';

const Page: React.FC = () => {
  return (
    <main className='container max-w-4xl mx-auto p-4'>
      <h1 className='text-3xl font-semibold text-center capitalize my-8'>
        Writing
      </h1>
      <div className='grid md:grid-cols-3 gap-10 mt-10'>
        <div className='md:col-span-2 space-y-6'>
          <FtPrintf />
        </div>
        <aside className='space-y-6'>
          <Profile className='w-full' />
          <Bookmarks />
        </aside>
      </div>
    </main>
  );
}

export default Page;
