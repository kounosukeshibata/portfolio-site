interface TBlog {
  id: string;
  title: string;
  content: string;
}

export const dynamicParams = false;

export async function generateStaticParams(): Promise<{ id: string }[]> {
  // const res = await fetch(
  //   `https://portfolio-site-three-sooty.vercel.app/api/blog/`
  // );
  const res = await fetch(
    `http://localhost:3000/api/blog/`
  );
  const blogData = await res.json();
  console.log(blogData);
  return blogData.map((blog: TBlog) => ({
    id: blog.id,
  }));
}

const getBlogArticle = async (id: string) => {
  // const res = await fetch(
  //   `https://portfolio-site-three-sooty.vercel.app/api/blog/${id}`
  // );
  const res = await fetch(
    `http://localhost:3000/api/blog/${id}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch blog article");
  }

  const blogArticle = await res.json();
  return blogArticle;
};

const BlogArticlePage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const blogArticle = await getBlogArticle(id);

  return (
    <div className="container mx-auto py-5">
      <h2 className="text-[50px]">{blogArticle.title}</h2>
      <p>{blogArticle.content}</p>
    </div>
  );
};

export default BlogArticlePage;
