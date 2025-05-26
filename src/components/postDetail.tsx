"use client";

import { useUser } from "@/app/context/user-context";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { PostDetail } from "@/types/post_detail";
import { Heart, MessageCircle, Repeat2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { pagesPath } from "../../utils/$path";
import { RepliedPostCard } from "./repliedPostCard";
import ReplyForm from "./replyForm";
import { ReplyPostCard } from "./replyPostCard";
import { Button } from "./ui/button";

export const PostDetailComponent = ({ post }: { post: PostDetail }) => {
	const mainPostRef = useRef<HTMLDivElement | null>(null);
	const { user } = useUser();

	useEffect(() => {
		mainPostRef.current?.scrollIntoView({ behavior: "auto", block: "start" });
	}, []);
	return (
		<div className="min-h-screen flex flex-col">
			{post.replyToId && <RepliedPostCard repliedPostId={post.replyToId} />}
			<div className="max-w-2xl space-y-6 flex-1 mb-200">
				<div className="flex items-start gap-4" ref={mainPostRef}>
					<Avatar>
						<AvatarImage src={post.user.image} />
						<AvatarFallback>{post.user.name[0].toUpperCase()}</AvatarFallback>
					</Avatar>
					<div>
						<Link href={pagesPath.users._id(post.user.id).$url().path}>
							<div className="font-semibold text-zinc-800 dark:text-zinc-100">
								{post.user.name}
							</div>
						</Link>

						<p className="mt-1 whitespace-pre-wrap text-base text-zinc-900 dark:text-zinc-200">
							{post.content}
						</p>
						<div className="mt-3 flex gap-4 text-sm text-zinc-500">
							<Button
								variant="ghost"
								size="sm"
								className="flex items-center gap-1 px-2"
							>
								<Heart className="h-4 w-4" />
								{post.likesCount}
							</Button>
							<Button
								variant="ghost"
								size="sm"
								className="flex items-center gap-1 px-2"
							>
								<MessageCircle className="h-4 w-4" />
								{post.repliesCount}
							</Button>
							<Button
								variant="ghost"
								size="sm"
								className="flex items-center gap-1 px-2"
							>
								<Repeat2 className="h-4 w-4" />
								{post.repostsCount}
							</Button>
						</div>
					</div>
				</div>

				{post.repliesCount > 0 && (
					<div className="mt-4">
						<div className="flex items-center gap-2 text-sm text-zinc-500 justify-between py-2 border-t">
							<h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
								返信
							</h3>
							<span className="text-zinc-400">アクティビティを表示</span>
						</div>
						{post.replies.map((reply) => (
							<div key={reply.id} className="border-t py-4">
								<ReplyPostCard reply={reply} />
							</div>
						))}
					</div>
				)}
			</div>

			<div className="sticky bottom-0 w-full bg-white dark:bg-black border-t p-4">
				<ReplyForm user={user} replyToPost={post} />
			</div>
		</div>
	);
};
