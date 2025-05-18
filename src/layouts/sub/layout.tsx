import { Toaster } from "@/components/ui/sonner";

export const SubLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<main>
				{children}
				<Toaster />
			</main>
		</div>
	);
};
