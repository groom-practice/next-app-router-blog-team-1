// components > PostForm.js
"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function PostForm({ post, id }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: post?.title || "",
    content: post?.content || "",
    category: post?.category || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("작성된 데이터 -> ", formData);

    if (post && id) {
      await fetch(`/api/posts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      router.push(`/posts/${id}`);
    } else {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      router.push(`/posts`);
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <div className="grid gap-2 mb-4">
          <label htmlFor="title" className="text-sm font-medium">
            제목
          </label>
          <input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="글 제목을 입력하세요"
            className="border rounded p-4"
            required
          />
        </div>
        <div className="grid gap-2 mb-4">
          <label htmlFor="content" className="text-sm font-medium">
            내용
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="글 내용을 입력하세요"
            className="min-h-[200px] border rounded p-4"
            required
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="category" className="text-sm font-medium">
            카테고리
          </label>
          <input
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="카테고리를 입력하세요"
            className="border rounded p-4"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-400 p-4 mt-6 rounded text-white font-bold"
        >
          {post ? "글 수정하기" : "글 작성하기"}
        </button>
      </form>
    </main>
  );
}

export default PostForm;
