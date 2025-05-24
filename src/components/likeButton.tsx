"use client";

import { likePost } from "@/lib/api/post";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

type LikeButtonProps = {
	initialLiked: boolean;
	initialLikes: number;
	postId: number;
	userId: number | undefined;
};

export const LikeButton = ({
	initialLiked,
	initialLikes,
	postId,
	userId,
}: LikeButtonProps) => {
	const [liked, setLiked] = useState(initialLiked);
	const [likes, setLikes] = useState(initialLikes);
	const [isAnimating, setIsAnimating] = useState(false);

	const handleLike = async () => {
		await likePost({ postId: postId, userId: userId });
		setLiked(!liked);
		setLikes((prev) => (liked ? prev - 1 : prev + 1));

		setIsAnimating(true);
		setTimeout(() => setIsAnimating(false), 500);
	};

	return (
		<Button
			variant="ghost"
			className="gap-1 rounded-full group"
			onClick={handleLike}
		>
			<Heart
				className={cn(
					"transition-all duration-300",
					liked ? "fill-red-500 text-red-500" : "fill-transparent",
					isAnimating && "scale-125 animate-pulse",
				)}
			/>
			<span className={cn(liked && "text-red-500")}>{likes}</span>
		</Button>
	);
};
