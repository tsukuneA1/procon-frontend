import { Heart, House, Search, User } from "lucide-react";
import { Button } from "../../ui/button";

export const Footer = () => {
	const icons = [
		{
			component: <House className="p-1" />,
			key: "House",
			label: "トップページへ移動",
		},
		{
			component: <Search className="p-1" />,
			key: "Search",
			label: "検索ページへ移動",
		},
		{
			component: <Heart className="p-1" />,
			key: "Heart",
			label: "通知ページへ移動",
		},
		{
			component: <User className="p-1" />,
			key: "User",
			label: "マイページへ移動",
		},
	];

	return (
		<div className="flex md:flex-col md:h-full md:w-fit w-full px-1 md:px-3 py-3 md:py-1 text-gray-500 bg-gray-50">
			{icons.map((icon) => (
				<div
					key={icon.key}
					className="flex md:h-1/4 w-1/4 md:w-fit justify-center items-center"
				>
					<Button
						asChild
						variant="ghost"
						size="icon"
						className="cursor-pointer"
						aria-label={icon.label}
					>
						{icon.component}
					</Button>
				</div>
			))}
		</div>
	);
};
