import BlurFade from "@/components/magicui/blur-fade";
import { allPosts } from "content-collections";
import type { Metadata } from "next";
import { paginate, normalizePage } from "@/lib/pagination";
import BlogsSection from "@/components/section/blogs-section";
import { DATA } from "@/data/resume";

const PAGE_SIZE = 6;
const BLOG_DESCRIPTION = "Thoughts on software development, life, and more.";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}): Promise<Metadata> {
  const { page: pageParam } = await searchParams;
  const totalPages = Math.ceil(allPosts.length / PAGE_SIZE);
  const currentPage = normalizePage(pageParam, totalPages);

  const baseUrl = `${DATA.url}/blog`;
  const title =
    currentPage === 1 ? "Blog" : `Blog - Page ${currentPage}`;
  const canonical =
    currentPage === 1 ? baseUrl : `${baseUrl}?page=${currentPage}`;

  const prev =
    currentPage > 1
      ? currentPage === 2
        ? baseUrl
        : `${baseUrl}?page=${currentPage - 1}`
      : undefined;
  const next =
    currentPage < totalPages
      ? `${baseUrl}?page=${currentPage + 1}`
      : undefined;

  return {
    title,
    description: BLOG_DESCRIPTION,
    alternates: {
      canonical,
      ...(prev && { prev }),
      ...(next && { next }),
    },
    openGraph: {
      title,
      description: BLOG_DESCRIPTION,
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: BLOG_DESCRIPTION,
    },
  };
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;

  const sortedPosts = [...allPosts].sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  });

  const totalPages = Math.ceil(sortedPosts.length / PAGE_SIZE);
  const currentPage = normalizePage(pageParam, totalPages);
  const { items: paginatedPosts, pagination } = paginate(sortedPosts, {
    page: currentPage,
    pageSize: PAGE_SIZE,
  });

  return (
    <BlogsSection
      posts={paginatedPosts}
      pagination={{
        page: pagination.page,
        totalPages: pagination.totalPages,
        hasNextPage: pagination.hasNextPage,
        hasPreviousPage: pagination.hasPreviousPage,
      }}
    />
  );
}
