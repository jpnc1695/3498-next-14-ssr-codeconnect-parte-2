import { CardPost } from "@/components/CardPost"
import logger from "@/logger"

import styles from './page.module.css'
import Link from "next/link"
import db from "../../prisma/db"

async function getAllPosts (page, searchTerm) {
  try {
    const where = {}
    if(searchTerm){
      where.title = {
        contains: searchTerm,
        mode: 'insensitive'
      }
    }
    const totalItens = await db.post.count({where})
    const perPage = 2
    const prev = page > 1 ? page - 1 : null
    const skip = (page- 1) * perPage;
    const totalPages  = Math.ceil(totalItens / perPage)
    const next = page < totalPages ? page + 1 : null
    
    const posts = await db.post.findMany({
      take: perPage,
      skip,
      where,
      orderBy:{createdAt: 'desc'},
      include: {
        author: true
      }
    })

    return{data: posts, prev, next}

  } catch (error) {
    logger.error('Falha ao obter posts', {error})
    return{data:[], prev: null, next: null}
  }
}

export default async function Home(props) {
  const searchParams = await props.searchParams
  const currentPage = parseInt(searchParams?.page || 1)
  const searchTerm = searchParams?.q
  const { data: posts, prev, next } = await getAllPosts(currentPage, searchTerm)
  return (
    <main className={styles.grid}>
      {posts.map(post =>  <CardPost key={post.id} post={post} />)}
      <div className={styles.links}>
        {prev && <Link href={{pathname:'/', query:{page: prev, q: searchTerm}}}>Página anterior</Link>}
        {next && <Link href={{pathname:'/', query:{page: next, q: searchTerm}}}>Próxima página</Link>}
      </div>
    </main>
  )
}
