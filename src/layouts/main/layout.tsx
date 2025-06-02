import { Footer } from "@/components/layout/main/footer";
import { Header } from "@/components/layout/main/header";
import { Toaster } from "@/components/ui/sonner";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="bg-gray-50">
			<div className="fixed flex justify-center md:justify-start w-full">
				<Header />
			</div>
			<div className="flex flex-col md:flex-row">
				<main className="mx-auto flex w-full max-w-3xl flex-grow flex-col items-center">
					{children}
				</main>
				<Toaster />
				<div className="md:h-full md:w-fit w-full bottom-0 md:py-44 fixed border-t border-border">
					<Footer />
				</div>
			</div>
		</div>
	);
};
