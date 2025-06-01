import { Heart, House, Search, User } from "lucide-react";
import { Button } from "../../ui/button";

export const Footer = ({
	isVertical: isLargeScreen,
}: { isVertical: boolean }) => {
	const icons = [
		{ component: House, key: "House" },
		{ component: Search, key: "Search" },
		{ component: Heart, key: "Heart" },
		{ component: User, key: "User" },
	];

	return isLargeScreen ? (
		<div className="flex flex-col h-full px-3 py-1 text-gray-500 bg-gray-50">
			{icons.map(({ component: Icon, key }) => (
				<div key={key} className="flex h-1/4 justify-center items-center">
					<Button
						asChild
						variant="ghost"
						size="icon"
						className="cursor-pointer"
					>
						<Icon className="p-1" />
					</Button>
				</div>
			))}
		</div>
	) : (
		<div className="flex w-full px-1 py-3 text-gray-500 bg-white">
			{icons.map(({ component: Icon, key }) => (
				<div key={key} className="flex w-1/4 justify-center items-center">
					<Button
						asChild
						variant="ghost"
						size="icon"
						className="cursor-pointer"
					>
						<Icon className="p-1" />
					</Button>
				</div>
			))}
		</div>
	);
};
