import { PostDetailComponent } from "@/components/postDetail";
import { MainLayout } from "@/layouts/main/layout";

export default async function Page({
	params,
}: { params: Promise<{ id: string }> }) {
	const { id } = await params;

	return (
		<MainLayout>
			<PostDetailComponent id={id} />
		</MainLayout>
	);
}
