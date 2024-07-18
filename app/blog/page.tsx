import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "posts",
  description: "brihadeesh's posts",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">posts</h1>
      <BlogPosts />
    </section>
  );
}
