import { PostDetailComponent } from "@/components/postDetail";
import { MainLayout } from "@/layouts/main/layout";

export default function Page({
	params,
}: { params: { id: string } }) {
	const { id } = params;

	return (
		<MainLayout>
			<PostDetailComponent id={id} />
		</MainLayout>
	);
}
