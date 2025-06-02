import { Heart, House, Search, User } from "lucide-react";
import { Button } from "../../ui/button";

export const Footer = () => {
	const icons = [
		{ component: House, key: "House" },
		{ component: Search, key: "Search" },
		{ component: Heart, key: "Heart" },
		{ component: User, key: "User" },
	];

	return (
		<div className="flex md:flex-col md:h-full md:w-fit w-full px-1 md:px-3 py-3 md:py-1 text-gray-500 bg-gray-50">
			{icons.map(({ component: Icon, key }) => (
				<div
					key={key}
					className="flex md:h-1/4 w-1/4 md:w-fit justify-center items-center"
				>
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
