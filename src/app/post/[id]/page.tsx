import { notFound } from "next/navigation"
import { PostDetail } from "@/components/post-detail"
import { Post } from "@/types/post"

async function getPostById(id: string): Promise<Post | null> {
  if (id === "1") {
    return {
      id: "1",
      content: "これはサンプル投稿です",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      author: {
        name: "sample_user",
        image: "/avatar.png",
      },
      replies: []
    }
  }
  return null
}

export default async function Page({
  params,
}: {
  params: { id: string }
}) {
  const post = await getPostById(params.id)
  if (!post) return notFound()

  return <PostDetail post={post} />
}
