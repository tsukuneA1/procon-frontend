"use client";

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import type { Post as PostType } from "@/types/post";

import { useUser } from "@/app/context/user-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
	Drawer,
	DrawerContent,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { pagesPath } from "@/lib/$path";
import { getTimeDistance } from "@/lib/utils";
import { MessageCircle, MoreHorizontal, Share } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LikeButton } from "../like/likeButton";
import { QuotedPostCard } from "../postCreationDialog/quotedPostCard";
import { RepostButton } from "../repost/repostButton";
import { UserIcon } from "../userIcon/userIcon";
import { PostOptions } from "./postOptions";

export const Post = ({ post }: { post: PostType }) => {
	const { user } = useUser();

	const router = useRouter();
	const handlePostClick = () => {
		router.push(pagesPath.posts._id(post.id).$url().path);
	};

	const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
		e.stopPropagation();
	};

	return (
		<Card className="w-full rounded-none p-4 pb-2 sm:w-2xl">
			<div className="flex gap-4">
				<UserIcon iconInfo={{ ...post.user }} />
				<div className="flex flex-1 flex-col">
					<CardHeader className="flex items-center p-0 pb-0.5">
						<Link href={pagesPath.users._id(post.user.id).$url().path}>
							<span className="font-semibold text-sm">{post.user.name}</span>
						</Link>
						<span className="text-gray-400 text-xs">
							{getTimeDistance(post.createdAt)}
						</span>
						<Popover>
							<PopoverTrigger
								asChild
								className="ml-auto text-gray-500 hidden md:block"
							>
								<Button variant="ghost" size="icon">
									<MoreHorizontal className="h-4 w-4" />
								</Button>
							</PopoverTrigger>
							<PopoverContent
								align="end"
								className="m-0 flex flex-col divide-y p-0"
							>
								<PostOptions />
							</PopoverContent>
						</Popover>
						<Drawer>
							<DrawerTrigger
								asChild
								className="ml-auto text-gray-500 md:hidden"
							>
								<Button variant="ghost" size="icon">
									<MoreHorizontal className="h-4 w-4" />
								</Button>
							</DrawerTrigger>
							<DrawerContent className="flex flex-col bg-neutral-200 p-4">
								<DrawerTitle className="mt-3" />
								<PostOptions />
							</DrawerContent>
						</Drawer>
					</CardHeader>
					<div className="cursor-pointer" onClick={handlePostClick} role="link">
						<CardContent className="p-0 text-base text-zinc-800 dark:text-zinc-200">
							{post.content}
							{post.quotedPost && <QuotedPostCard {...post.quotedPost} />}
						</CardContent>
						<div className="mt-3 flex gap-4 text-sm text-zinc-500">
							<div onClick={stopPropagation}>
								<LikeButton
									initialLiked={post.isLiked}
									initialLikesCount={post.likesCount}
									postId={post.id}
									userId={user?.id}
								/>
							</div>
							<div onClick={stopPropagation}>
								<Button
									variant="ghost"
									size="sm"
									className="flex items-center gap-1 px-2"
								>
									<MessageCircle className="h-4 w-4" />
									{post.repliesCount}
								</Button>
							</div>
							<div onClick={stopPropagation}>
								<RepostButton
									initialReposted={post.isReposted}
									initialRepostsCount={post.repostsCount}
									postId={post.id}
								/>
							</div>
							<div onClick={stopPropagation}>
								<Button
									variant="ghost"
									size="sm"
									className="flex items-center gap-1 px-2"
								>
									<Share />
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Card>
	);
};
