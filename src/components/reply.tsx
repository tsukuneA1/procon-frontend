import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { PostDetail } from "@/types/post_detail";
import { Heart, MessageCircle, Repeat2 } from "lucide-react";
import Link from "next/link";
import { pagesPath } from "../../utils/$path";
import { Button } from "./ui/button";

export const Reply = ({ reply }: { reply: PostDetail }) => {
	return (
		<Link href={pagesPath.posts._id(reply.id).$url().path}>
			<div className="flex">
				<div className="flex flex-col items-center">
					<Avatar>
						<AvatarImage src={reply.user.image} />
						<AvatarFallback>{reply.user.name[0].toUpperCase()}</AvatarFallback>
					</Avatar>

					{reply.replies_count > 0 && (
						<span className="w-px flex-1 bg-zinc-300 dark:bg-zinc-700 my-2" />
					)}
				</div>

				<div className="flex-1">
					<div className="font-semibold">@{reply.user.name}</div>
					<p className="text-zinc-800 dark:text-zinc-100">{reply.content}</p>

					<div className="mt-3 flex gap-4 text-sm text-zinc-500">
						<Button
							variant="ghost"
							size="sm"
							className="flex items-center gap-1 px-2"
						>
							<Heart className="h-4 w-4" />
							{reply.likes_count}
						</Button>
						<Button
							variant="ghost"
							size="sm"
							className="flex items-center gap-1 px-2"
						>
							<MessageCircle className="h-4 w-4" />
							{reply.replies_count}
						</Button>
						<Button
							variant="ghost"
							size="sm"
							className="flex items-center gap-1 px-2"
						>
							<Repeat2 className="h-4 w-4" />
							{reply.reposts_count}
						</Button>
					</div>
				</div>
			</div>
		</Link>
	);
};
