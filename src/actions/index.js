'use server'
import { revalidatePath } from "next/cache";
import db from "../../prisma/db";
import { resolve } from "styled-jsx/css";

export async function incrementThumbsUp(post) {

    await new Promise ((resolve) => setTimeout(resolve, 1500))

    await db.post.update({
        where:{
            id:post.id
        },
        data:{
            likes: {
                increment: 1
            }
        }
    })

    revalidatePath('/')
    revalidatePath(`/${post.slug}`)
}
