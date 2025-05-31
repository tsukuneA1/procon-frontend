import { Heart, House, Search, User } from "lucide-react";
import { Button } from "../../ui/button";

export const Footer = ({
	isVertical: isLargeScreen,
}: { isVertical: boolean }) => {
	return isLargeScreen ? (
		<div className="flex flex-col h-full px-3 py-1 text-gray-500 bg-gray-50">
			<div className="flex h-1/4 justify-center items-center">
				<Button asChild variant="ghost" size="icon">
					<House className="p-1" />
				</Button>
			</div>
			<div className="flex h-1/4 justify-center items-center">
				<Button asChild variant="ghost" size="icon">
					<Search className="p-1" />
				</Button>
			</div>
			<div className="flex h-1/4 justify-center items-center">
				<Button asChild variant="ghost" size="icon">
					<Heart className="p-1" />
				</Button>
			</div>
			<div className="flex h-1/4 justify-center items-center">
				<Button asChild variant="ghost" size="icon">
					<User className="p-1" />
				</Button>
			</div>
		</div>
	) : (
		<div className="flex w-full px-1 py-3 text-gray-500 bg-white">
			<div className="flex w-1/4 justify-center items-center">
				<Button asChild variant="ghost" size="icon">
					<House className="p-1" />
				</Button>
			</div>
			<div className="flex w-1/4 justify-center items-center">
				<Button asChild variant="ghost" size="icon">
					<Search className="p-1" />
				</Button>
			</div>
			<div className="flex w-1/4 justify-center items-center">
				<Button asChild variant="ghost" size="icon">
					<Heart className="p-1" />
				</Button>
			</div>
			<div className="flex w-1/4 justify-center items-center">
				<Button asChild variant="ghost" size="icon">
					<User className="p-1" />
				</Button>
			</div>
		</div>
	);
};
