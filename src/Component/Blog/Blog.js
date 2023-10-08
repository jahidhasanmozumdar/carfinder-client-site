import React from "react";
import { blogData } from "../../Asset/blogData";

const Blog = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <header className="text-center my-8">
        <h1 className="text-3xl font-semibold">My Blog</h1>
        <p className="text-gray-600">Welcome to my blog page</p>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 place-items-center gap-y-[10px] mx-auto">
        {blogData.map((post) => (
          <div className="max-w-[350px] rounded overflow-hidden shadow-lg bg-slate-200 min-h-[620px] max-h-[620px] flex flex-col justify-center items-center">
            <figure>
              <img
                src={post.imageUrl}
                alt="Shoes"
                className="rounded-2xl min-w-[300px] max-w-[300px]  min-h-[200px] max-h-[200px] py-5"
              />
            </figure>
            <div className="card-body items-start text-start pt-0">
              <h2 className="card-title text-black">{post.title}</h2>
              <p className="text-black">{post.content}</p>
              <div className="card-actions">
                <button className="btn btn-primary">see more</button>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Blog;
