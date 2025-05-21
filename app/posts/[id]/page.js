"use client"

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function PostDetailPage({ }) {
  const { id } = useParams();
  const router = useRouter();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`/api/posts/${id}`)
      .then((res) => {
        if (res.status === 404) router.push("/not-found");
        return res.json();
      })
      .then(setPost);
  }, [id, router]);

  const handleDelete = async() => {
    const confirmed = confirm("정말 삭제 하시겠습니까?");
    if (!confirmed) return;
    await fetch(`/api/posts/${id}`, {
      method: "DELETE",
    });
    router.push("/posts");
    router.refresh();
  };

  if(!post) return <p>로딩중 ...</p>;

  return (
    <main>
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="my-4">{post.content}</p>
      <div className="space-x-2">
        <Link href={`/edit/${id}`} className="text-blue-600 underline">수정</Link>
        <button onClick={handleDelete} className="text-red-600 underline">삭제</button>
      </div>
    </main>
  )
}