import { House } from "lucide-react";

export const Footer = ({
	isVertical: isLargeScreen,
}: { isVertical: boolean }) => {
	return isLargeScreen ? (
		<div className="flex flex-col h-full px-3 py-1 bg-white">
			<div className="flex h-1/4 justify-center items-center">
				<House className="" />
			</div>
			<div className="flex h-1/4 justify-center items-center">
				<House className="" />
			</div>
			<div className="flex h-1/4 justify-center items-center">
				<House className="" />
			</div>
			<div className="flex h-1/4 justify-center items-center">
				<House className="" />
			</div>
		</div>
	) : (
		<div className="flex w-full px-1 py-3 bg-white">
			<div className="flex w-1/4 justify-center items-center">
				<House className="" />
			</div>
			<div className="flex w-1/4 justify-center items-center">
				<House className="" />
			</div>
			<div className="flex w-1/4 justify-center items-center">
				<House className="" />
			</div>
			<div className="flex w-1/4 justify-center items-center">
				<House className="" />
			</div>
		</div>
	);
};
