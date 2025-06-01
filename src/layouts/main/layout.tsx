"use client";

import { Footer } from "@/components/layout/main/footer";
import { Header } from "@/components/layout/main/header";
import { Toaster } from "@/components/ui/sonner";
import { breakPoints } from "@/constants/breakpoints";
import { useMediaQuery } from "@mui/material";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
	const isDesktop = useMediaQuery(
		`(min-width: ${breakPoints.mobileToDesktop})`,
	);

	return isDesktop ? (
		<div className="bg-gray-50">
			<div className="fixed h-full border-t border-border">
				<Header />
				<div className="h-full py-44">
					<Footer isVertical={isDesktop} />
				</div>
			</div>
			<div className="flex min-h-screen flex-col justify-center items-center">
				<main className="mx-auto flex w-full max-w-3xl flex-grow flex-col items-center mt-10">
					{children}
				</main>
				<Toaster />
			</div>
		</div>
	) : (
		<div className="flex min-h-screen flex-col">
			<div className="flex justify-center">
				<Header />
			</div>
			<main className="mx-auto flex w-full max-w-3xl flex-grow flex-col items-center">
				{children}
			</main>
			<Toaster />
			<div className="fixed bottom-0 left-0 right-0 border-t border-border">
				<Footer isVertical={isDesktop} />
			</div>
		</div>
	);
};
