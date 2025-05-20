import Link from 'next/link';
import SearchBar from '@/components/SearchBar';

async function getPosts() {
  const res = await fetch('http://localhost:3000/api/posts', {
    cache: 'no-store',
  });
  return res.json();
}

export default async function PostLists({ searchParams }) {
  const postList = await getPosts();
  const categories = ['All', 'React', 'Next.js', 'JavaScript'];
  const category = searchParams?.category || 'All';
  const keyword = searchParams?.query || '';

  const filterPosts = postList.filter((post) => {
    const title = post.title.toLowerCase();
    const search = keyword.toLowerCase();

    if (!title.includes(search)) return false;
    if (category && category !== 'All' && post.category !== category)
      return false;

    return true;
  });

  return (
    <div className='m-4'>
      <p className='text-xl font-bold mb-2'>글 목록</p>
      <SearchBar />

      <div className='flex gap-2 my-2'>
        {categories.map((cat) => (
          <Link
            key={cat}
            href={cat === 'All' ? '/posts' : `/posts/?category=${cat}`}
            className='text-blue-500 underline'
          >
            {cat}
          </Link>
        ))}
      </div>

      <ul>
        {filterPosts.map((post) => (
          <li key={post.id} className='text-lg list-none py-1 border-b'>
            <Link href={`posts/${post.id}`} className='text-blue-500'>
              {post.title}
            </Link>
            <span className='text-sm text-gray-500 ml-1'>
              [{post.category}]
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
