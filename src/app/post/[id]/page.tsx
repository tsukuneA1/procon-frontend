"use client"

import { useState } from "react"
import { Post } from "@/types/post"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { notFound } from "next/navigation"
import { Reply } from "@/types/reply"

const mockPost: Post = {
  id: "1",
  content: "これはサンプルポストです。",
  createdAt: "2025-04-24T12:34:56Z",
  updatedAt: "2025-04-24T12:34:56Z",
  author: {
    name: "sample_user",
    image: "/avatar.png",
  },
  replies: []
}

export default function PostPage({ params }: { params: { id: string } }) {
  const post = mockPost
  if (!post) return notFound()

  const [replies, setReplies] = useState<Reply[]>([])
  const [replyText, setReplyText] = useState("")

  const handleReply = () => {
    if (!replyText.trim()) return

    const newReply: Reply = {
      id: `${Date.now()}`,
      content: replyText,
      createdAt: new Date().toISOString(),
      author: {
        name: "you",
        image: "/your-avatar.png",
      },
    }

    setReplies([newReply, ...replies])
    setReplyText("")
  }

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      <div className="flex gap-4 items-start">
        <Avatar>
          <AvatarImage src={post.author.image} />
          <AvatarFallback>{post.author.name[0].toUpperCase()}</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-semibold text-zinc-800 dark:text-zinc-100">@{post.author.name}</div>
          <p className="mt-1 text-base text-zinc-900 dark:text-zinc-200 whitespace-pre-wrap">
            {post.content}
          </p>
          <div className="mt-2 text-sm text-zinc-500">
            {new Date(post.createdAt).toLocaleString()}
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <Input
          placeholder="リプライを書く..."
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
        />
        <Button onClick={handleReply}>返信</Button>
      </div>
      <div className="space-y-4">
        {replies.map((reply) => (
          <div key={reply.id} className="flex gap-3 items-start">
            <Avatar>
              <AvatarImage src={reply.author.image} />
              <AvatarFallback>{reply.author.name[0].toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold">@{reply.author.name}</div>
              <p className="text-zinc-800 dark:text-zinc-100">{reply.content}</p>
              <div className="text-sm text-zinc-500">
                {new Date(reply.createdAt).toLocaleString()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
