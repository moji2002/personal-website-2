import BlurFade from "@/components/magicui/blur-fade";
import { BlogCard } from "@/components/blog-card";
import { allPosts } from "content-collections";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export default function BlogPreviewSection() {
  const sortedPosts = [...allPosts].sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  });
  const latestPosts = sortedPosts.slice(0, 2);

  return (
    <section id="blog">
      <div className="flex min-h-0 flex-col gap-y-8">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div
              className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent"
            />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">
                Latest Posts
              </span>
            </div>
            <div
              className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent"
            />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Thoughts and writings
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              My thoughts on software development, life, and more.
            </p>
          </div>
        </div>
        {latestPosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2  max-w-[960px] mx-auto auto-rows-fr">
              {latestPosts.map((post, id) => {
                const slug = post._meta.path.replace(/\.mdx$/, "");
                return (
                  <BlurFade
                    key={slug}
                    delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                    className="h-full"
                  >
                    <BlogCard
                      href={`/blog/${slug}`}
                      title={post.title}
                      description={post.summary}
                      dates={post.publishedAt}
                      image={post.image}
                    />
                  </BlurFade>
                );
              })}
            </div>
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <div className="flex justify-center max-w-[960px] mx-auto mt-4">
                <Link
                  href="/blog"
                  className="h-10 px-6 flex items-center justify-center text-sm font-medium border border-border rounded-lg hover:bg-accent/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  View all posts
                </Link>
              </div>
            </BlurFade>
          </>
        ) : (
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className="flex flex-col items-center justify-center py-12 px-4 border border-border rounded-xl max-w-[800px] mx-auto">
              <p className="text-muted-foreground text-center">
                No blog posts yet. Check back soon!
              </p>
            </div>
          </BlurFade>
        )}
      </div>
    </section>
  );
}
