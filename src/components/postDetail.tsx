"use client";

import { useUser } from "@/app/context/user-context";
import type { Post } from "@/types/post";
import { useEffect, useRef } from "react";
import { PostCard } from "./postCard";
import { RepliedPostCard } from "./repliedPostCard";
import ReplyForm from "./replyForm";
import { ReplyPostCard } from "./replyPostCard";

export const PostDetailComponent = ({ post }: { post: Post }) => {
	const mainPostRef = useRef<HTMLDivElement | null>(null);
	const { user } = useUser();

	useEffect(() => {
		mainPostRef.current?.scrollIntoView({ behavior: "auto", block: "start" });
	}, []);
	return (
		<div className="min-h-screen flex flex-col">
			{post.replyToId && <RepliedPostCard repliedPostId={post.replyToId} />}
			<div className="max-w-2xl flex-1">
				<div ref={mainPostRef} />
				<PostCard post={post} />

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
