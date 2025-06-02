import { Heart, House, Search, User } from "lucide-react";
import { Button } from "../../ui/button";

export const Footer = () => {
	const icons = [
		{
			component: <House />,
			key: "House",
			label: "トップページへ移動",
		},
		{
			component: <Search />,
			key: "Search",
			label: "検索ページへ移動",
		},
		{
			component: <Heart />,
			key: "Heart",
			label: "通知ページへ移動",
		},
		{
			component: <User />,
			key: "User",
			label: "マイページへ移動",
		},
	];

	return (
		<footer className="flex md:flex-col md:h-full md:py-44 md:w-fit w-full px-1 md:px-3 py-3 text-gray-500 bg-white md:bg-gray-50">
			{icons.map((icon) => (
				<div
					key={icon.key}
					className="flex md:h-1/4 w-1/4 md:w-fit justify-center items-center"
				>
					<Button
						asChild
						variant="ghost"
						size="icon"
						className="cursor-pointer p-1"
						aria-label={icon.label}
					>
						{icon.component}
					</Button>
				</div>
			))}
		</footer>
	);
};
