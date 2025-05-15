"use client";
import type { PostDetail } from "@/types/post_detail";
import { useEffect, useState } from "react";
import { Reply } from "./reply";

export const RepliedPostCard = ({
	repliedPostId,
}: {
	repliedPostId: number;
}) => {
	const [parentPost, setParentPost] = useState<PostDetail | null>(null);

	useEffect(() => {
		const fetchParent = async () => {
			if (repliedPostId) {
				const res = await fetch(
					`${process.env.NEXT_PUBLIC_BASE_URL}/posts/${repliedPostId}`,
				);
				if (res.ok) {
					const data: PostDetail = await res.json();
					setParentPost(data);
				} else {
					console.error("Failed to fetch parent post:", res.statusText);
				}
			}
		};

		fetchParent();
	}, [repliedPostId]);

	return (
		<>
			{parentPost?.reply_to_id && (
				<RepliedPostCard repliedPostId={parentPost.reply_to_id} />
			)}

			{parentPost && <Reply reply={parentPost} />}
		</>
	);
};
