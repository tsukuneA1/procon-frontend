"use client";

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { breakPoints } from "@/constants/breakpoints";
import type { Post } from "@/types/post";
import { useMediaQuery } from "@mui/material";
import {
	Bookmark,
	EyeOff,
	Heart,
	Link2,
	MessageCircle,
	MessageSquareOff,
	MoreHorizontal,
	Repeat2,
	Share,
	ShieldAlert,
	UserRoundX,
} from "lucide-react";
import Link from "next/link";
import { pagesPath } from "../../utils/$path";
import { getTimeDistance } from "../lib/utils";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from "./ui/drawer";
import { UserIcon } from "./userIcon";

export const PostCard = ({ post }: { post: Post }) => {
	const isDesktop = useMediaQuery(
		`(min-width: ${breakPoints.mobileToDesktop}px)`,
	);

	return (
		<Card className="w-full rounded-none p-4 pb-2 sm:w-2xs md:w-2xl">
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
						{isDesktop ? (
							<Popover>
								<PopoverTrigger asChild className="ml-auto text-gray-500">
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
						) : (
							<Drawer>
								<DrawerTrigger asChild className="ml-auto text-gray-500">
									<Button variant="ghost" size="icon">
										<MoreHorizontal className="h-4 w-4" />
									</Button>
								</DrawerTrigger>
								<DrawerContent className="flex flex-col bg-neutral-200 p-4">
									<DrawerTitle className="mt-3" />
									<PostOptions />
								</DrawerContent>
							</Drawer>
						)}
					</CardHeader>
					<Link href={pagesPath.posts._id(post.id).$url().path}>
						<CardContent className="p-0 text-base text-zinc-800 dark:text-zinc-200">
							{post.content}
						</CardContent>
					</Link>
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
		</Card>
	);
};

const PostOptions = () => {
	return (
		<div>
			<div className="m-1 flex flex-col divide-y rounded-md bg-white">
				<Button variant="ghost" size="sm" className="flex justify-between">
					<span>保存</span>
					<Bookmark />
				</Button>
				<Button variant="ghost" size="sm" className="flex justify-between">
					<span>興味なし</span>
					<EyeOff />
				</Button>
			</div>
			<div className="m-1 flex flex-col divide-y rounded-md bg-white">
				<Button variant="ghost" size="sm" className="flex justify-between">
					<span>リンクをコピー</span>
					<Link2 />
				</Button>
			</div>
			<div className="m-1 flex flex-col divide-y rounded-md bg-white">
				<Button variant="ghost" size="sm" className="flex justify-between">
					<span>ミュート</span>
					<MessageSquareOff />
				</Button>
				<Button
					variant="ghost"
					size="sm"
					className="flex justify-between text-red-500"
				>
					<span>ブロック</span>
					<UserRoundX />
				</Button>
				<Button
					variant="ghost"
					size="sm"
					className="flex justify-between text-red-500"
				>
					<span>報告する</span>
					<ShieldAlert />
				</Button>
			</div>
		</div>
	);
};
