import { DetailPost } from "@/components/general/post/detailPost";
import { MainLayout } from "@/layouts/main/layout";

const PostIdPage = async ({ params }: { params: { id: string } }) => {
	const { id } = await params;

	return (
		<MainLayout>
			<DetailPost id={id} />
		</MainLayout>
	);
};

export default PostIdPage;
