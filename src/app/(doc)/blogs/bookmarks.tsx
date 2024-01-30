import { Bookmark } from 'lucide-react';
import React from 'react';

const Bookmarks: React.FC = () => {
    const bookmarks = [
        { id: 1, title: "Planor", url: "https://planorsoft.com/" },
    ];

    return (
        <div className='bookmarks mx-auto px-5 border border-neutral-700 shadow-lg rounded-lg p-6'>
            <h2 className='text-2xl font-semibold mb-4'>Bookmarks</h2>
            <ul className='space-y-3'>
                {bookmarks.map((bookmark) => (
                    <li key={bookmark.id} className='border-b border-gray-200 pb-3 mb-3'>
                        <a href={bookmark.url} target='_blank' className='flex items-center font-semibold transition-colors'>
                            <Bookmark className='mr-2' /> {bookmark.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Bookmarks;
