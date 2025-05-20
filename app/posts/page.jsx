import Link from 'next/link';

async function getPosts() {
  const res = await fetch('http://localhost:3000/api/posts', {
    cache: 'no-store',
  });
  return res.json();
}

export default async function PostLists({ searchParams }) {
  const postList = await getPosts();
  const categories = ['All', 'React', 'Next.js', 'JavaScript'];
  const category = searchParams?.category || '';

  const filterPosts = postList.filter((post) => {
    if (!category || category === 'All') return true;
    return post.category === category;
  });

  return (
    <div className='m-4'>
      <p className='text-xl font-bold mb-2'>글 목록</p>

      <div className='flex gap-2 my-2'>
        {categories.map((category) => (
          <Link
            key={category}
            href={category === 'All' ? '/posts' : `posts/?category=${category}`}
            className='text-blue-500 underline'
          >
            {category}
          </Link>
        ))}
      </div>
      {filterPosts.map((post) => {
        return (
          <li key={post.id} className='text-lg list-none py-1  border-b'>
            <Link href={`posts/${post.id}`} className=' text-blue-500'>
              {post.title}
            </Link>
            <span className='text-sm text-gray-500 ml-1'>
              [{post.category}]
            </span>
          </li>
        );
      })}
    </div>
  );
}
