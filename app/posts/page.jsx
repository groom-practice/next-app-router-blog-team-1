import Link from 'next/link';

async function getPosts() {
  const res = await fetch('http://localhost:3000/api/posts', {
    cache: 'no-store',
  });
  return res.json();
}

export default async function PostLists() {
  const postList = await getPosts();

  return (
    <div className='m-4'>
      <p className='text-xl font-bold mb-2'>글 목록</p>

      {postList.map((post) => {
        return (
          <li key={post.id} className='text-lg list-none text-blue-500 py-1'>
            <Link href={`posts/${post.id}`} className=' border-b'>
              {post.title}
            </Link>
          </li>
        );
      })}
    </div>
  );
}
