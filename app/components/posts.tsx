import Link from "next/link";
import { formatDate, getBlogPosts } from "app/blog/utils";

interface Props {
  few?: boolean;
}

export function BlogPosts({ few }: Props) {
  let allBlogs = getBlogPosts();

  const articles = few ? allBlogs.slice(0, 5) : allBlogs;

  return (
    <div>
      {few && (
        <>
          <p className="my-3">--</p>
          <p className="font-medium mb-8">Posts</p>
        </>
      )}

      {articles
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}

      {few && (
        <p className="font-medium mb-8">
          read more posts{" "}
          <Link href="/blog" className="underline text-orange-500">
            here
          </Link>
        </p>
      )}
    </div>
  );
}
