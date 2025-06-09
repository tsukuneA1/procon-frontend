import {
	Drawer,
	DrawerContent,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { getTimeDistance } from "@/lib/utils";
import { Notice, NotifiableType } from "@/types/notice";
import { Card } from "@mui/material";
import {
	Frown,
	Heart,
	MessageSquareOff,
	MoreHorizontal,
	Repeat2,
	UserRoundX,
} from "lucide-react";
import Link from "next/link";
import { UserIcon } from "../components/userIcon";
import { Button } from "./ui/button";

export const NoticeCard = ({ notice }: { notice: Notice }) => {
	const link = "";

	return (
		<Card className="w-full rounded-none p-4 pb-2 sm:w-2xs md:w-2xl flex gap-4">
			<div className="pt-2">
				<NoticeIcon type={notice.notifiableType} />
			</div>
			<Link href={link} className="w-full h-full">
				<div className="flex flex-col flex-1">
					<div className="flex items-center p-0 pb-0.5 flex-1">
						<UserIcon iconInfo={{ ...notice.user }} />
						<span className="text-gray-400 text-xs ml-4 pt-3">
							{getTimeDistance(notice.createdAt)}
						</span>
						<Popover>
							<PopoverTrigger
								asChild
								className="ml-auto text-gray-500 hidden md:block"
							>
								<Button variant="ghost" size="icon">
									<MoreHorizontal className="h-4 w-4 ml-2.5" />
								</Button>
							</PopoverTrigger>
							<PopoverContent
								align="end"
								className="m-0 flex flex-col divide-y p-0"
							>
								<NoticeOptions />
							</PopoverContent>
						</Popover>
						<Drawer>
							<DrawerTrigger
								asChild
								className="ml-auto text-gray-500 md:hidden"
							>
								<Button variant="ghost" size="icon">
									<MoreHorizontal className="h-4 w-4 ml-2.5" />
								</Button>
							</DrawerTrigger>
							<DrawerContent className="flex flex-col bg-neutral-200 p-4">
								<DrawerTitle className="mt-3" />
								<NoticeOptions />
							</DrawerContent>
						</Drawer>
					</div>
					<div>
						<span className="font-bold">{notice.user.name}</span>
						<span className="font-normal">
							{NotificeMessage(notice.notifiableType)}
						</span>
					</div>
					<span className="mt-2 text-gray-500">{notice.post.content}</span>
				</div>
			</Link>
		</Card>
	);
};

const NoticeIcon = ({ type }: { type: NotifiableType }) => {
	switch (type) {
		case NotifiableType.Like:
			return <Heart className="text-red-400 fill-red-400" />;
		case NotifiableType.Repost:
			return <Repeat2 />;
		case NotifiableType.Reply:
			return <MessageSquareOff />;
		case NotifiableType.Follow:
			return <UserRoundX />;
		default:
			return null;
	}
};

const NoticeOptions = () => {
	return (
		<div className="m-1 flex flex-col divide-y rounded-md bg-white">
			<Button variant="ghost" className="flex justify-between">
				<span>表示しない</span>
				<Frown />
			</Button>
		</div>
	);
};

const NotificeMessage = (type: NotifiableType) => {
	switch (type) {
		case NotifiableType.Like:
			return "さんがあなたの投稿にいいねしました";
		case NotifiableType.Repost:
			return "さんがあなたの投稿をリポストしました";
		case NotifiableType.Reply:
			return "さんがあなたの投稿に返信しました";
		case NotifiableType.Follow:
			return "さんがあなたをフォローしました";
		default:
			return "さんからの通知";
	}
};
