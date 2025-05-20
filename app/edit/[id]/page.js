"use client";
import PostForm from "@/components/PostForm";
import { use, useEffect, useState } from "react";

function EditPostPage({ params }) {
  const { id } = use(params);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(`/api/posts/${id}`);
      const data = await res.json();
      setPost(data);
    };

    if (id) fetchPost();
  }, [id]);

  if (!post) return <p>로딩 중...</p>;

  return (
    <main className="flex flex-col space-y-6 p-4">
      <h1 className="text-3xl font-bold tracking-tight">글 수정</h1>
      <PostForm post={post} id={id} />
    </main>
  );
}

export default EditPostPage;
