import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { mdxComponents } from "@/components/mdx-components";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.frontmatter.title} | MD Rabbi Islam`,
    description: post.frontmatter.description,
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const { content } = await compileMDX({
    source: post.content,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeHighlight],
      },
    },
    components: mdxComponents,
  });

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-16 md:px-8">
      <header className="mb-8 space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700 dark:text-sky-400">
          {new Date(post.frontmatter.date).toLocaleDateString()} | {post.readingMinutes} min read
        </p>
        <h1 className="text-4xl font-semibold text-slate-900 dark:text-white md:text-5xl">{post.frontmatter.title}</h1>
        <p className="text-slate-600 dark:text-slate-400">{post.frontmatter.description}</p>
      </header>

      <article className="prose prose-slate max-w-none dark:prose-invert">{content}</article>
    </main>
  );
}
