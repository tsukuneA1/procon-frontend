import { TimelineFetcher } from "@/components/TimelineFetcher";
import { MainLayout } from "@/layouts/main/layout";

export default async function Home() {
	return (
		<MainLayout>
			<TimelineFetcher />
		</MainLayout>
	);
}
