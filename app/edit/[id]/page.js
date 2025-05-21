"use client";
import PostForm from "@/components/PostForm";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function EditPostPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/posts/${id}`);
        if (!res.ok) throw new Error("게시글을 불러오는 데 실패했습니다");
        const data = await res.json();
        setPost(data);
      } catch (err) {
        console.error(err);
        alert("게시글을 불러올 수 없습니다.");
      }
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
