interface TBlog {
  id: string;
  title: string;
  content: string;
}

export const dynamicParams = false;

export async function generateStaticParams(): Promise<{ id: string }[]> {
  const res = await fetch(
    `https://portfolio-site-three-sooty.vercel.app/api/blog/`
  );
  const blogData = await res.json();
  console.log(blogData);
  return blogData.map((blog: TBlog) => ({
    id: blog.id,
  }));
}

const getBlogArticle = async (id: string) => {
  const res = await fetch(
    `https://portfolio-site-three-sooty.vercel.app/api/blog/${id}`
  );
  const blogArticle = await res.json();

  return blogArticle;
};

const BlogArticlePage = async ({ params }: { params: { id: string } }) => {
  const blogArticle = await getBlogArticle(params.id);

  return (
    <div className="container mx-auto py-5">
      <h2 className="text-[50px]">{blogArticle.title}</h2>
      <p>{blogArticle.content}</p>
    </div>
  );
};

export default BlogArticlePage;
