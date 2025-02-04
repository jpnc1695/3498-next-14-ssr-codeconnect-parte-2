import logger from "@/logger";
import { remark } from "remark";
import html from "remark-html";
import styles from "./page.module.css";
import { CardPost } from "@/components/CardPost";
import db from "../../../../prisma/db";
import { redirect } from "next/navigation";


async function getPostBySlug(slug) {
  try {
    const post = await db.post.findFirst({
      where: {
        slug,
      },
      include: {
        author: true,
        comments: true
      },
    });

    if(!post){
        throw new Error(`Post não encontrado, Slug: ${slug}`)
    }

    const processedContent = await remark().use(html).process(post.markdown);
    const contentHtml = processedContent.toString();
    post.markdown = contentHtml;
    return post;

  } catch (error) {
    logger.error("Falaha ao obter o Post com o slug:", {slug, error})
  }

  redirect('/not-found')
}

const PagePost = async (props) => {
  const params = await props.params;
  const post = await getPostBySlug(params.slug);
  return (
    <div>
      <CardPost post={post} highlight />
      <h3 className={styles.subtitle}>Código:</h3>
      <div className={styles.code}>
        <div dangerouslySetInnerHTML={{ __html: post.markdown }} />
      </div>
    </div>
  );
};

export default PagePost;
