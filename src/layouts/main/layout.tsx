import { Header } from "@/components/layout/main/header";
import { Toaster } from "@/components/ui/sonner";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex min-h-screen flex-col">
			<Header />
			<main className="mx-auto flex w-full max-w-3xl flex-grow flex-col items-center">
				{children}
			</main>
			<Toaster />
		</div>
	);
};
