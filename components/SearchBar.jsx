'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') || '');

  useEffect(() => {
    setQuery(searchParams.get('query') || '');
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const params = new URLSearchParams(searchParams.toString());
    query ? params.set('query', query) : params.delete('query');

    router.push(`?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className='mb-4 flex items-center gap-2'>
      <input
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder='검색어 입력'
        className='w-64 h-10 border px-3 py-1 rounded focus:outline-none focus:ring-0 focus:border-gray-300'
      />
      <button
        type='submit'
        className='w-20 h-10 bg-blue-500 text-white rounded hover:bg-blue-600 transition'
      >
        검색
      </button>
    </form>
  );
}
