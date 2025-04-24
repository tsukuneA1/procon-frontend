import { notFound } from "next/navigation"
import { Post } from "@/types/post"
import { PostDetail } from "@/components/post-detail"

type PageProps = {
  params: {
    id: string
  }
}

async function getPostById(id: string): Promise<Post | null> {
  if (id === "1") {
    return {
      id: "1",
      content: "これはサンプルポストです。",
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

export default async function PostPage({ params }: PageProps) {
  const post = await getPostById(params.id)
  if (!post) return notFound()

  return <PostDetail post={post} />
}
