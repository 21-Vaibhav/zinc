import React from 'react'


type Post = {
  id: string;
  title: string;
};

const posts: Post[] = [
  { id: 'p1a2b3c4', title: '10 Tips for Writing Clean Code' },
  { id: 'x9y8z7w6', title: 'Understanding Async/Await in JavaScript' },
  { id: 'm3n4o5p6', title: "A Beginner's Guide to React Hooks" },
  { id: 'r7s8t9u0', title: 'How to Optimize Web Performance' },
  { id: 'k2l3m4n5', title: 'Exploring the New Features in ES2025' },
  { id: 'v1w2x3y4', title: 'The Ultimate Guide to TypeScript Types' },
  { id: 'z5a6b7c8', title: 'Building Scalable APIs with Node.js' },
  { id: 'd3e4f5g6', title: 'Mastering Git: Branches, Rebase, and More' },
  { id: 'h7i8j9k0', title: 'Why You Should Learn Functional Programming' },
  { id: 'l1m2n3o4', title: 'Understanding the Event Loop in JavaScript' },
];

const PostsList = async () => {
    const response = await fetch('http://localhost:3000/post');

    const post: Post[] = await response.json();

    return (
      <div className="container mx-auto">
        {posts.map((post: Post) => {
          return <div key={post.id}>{post.title}</div>;
        })}
      </div>
    );
}

export default PostsList