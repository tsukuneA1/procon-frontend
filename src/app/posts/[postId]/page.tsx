import { DetailPost } from "@/components/general/post/detailPost";
import { MainLayout } from "@/layouts/main/layout";

type PostPageProps = {
	params: Promise<{ postId: string }>;
};

const PostIdPage = async ({ params }: PostPageProps) => {
	const { postId } = await params;

	return (
		<MainLayout>
			<DetailPost id={postId} />
		</MainLayout>
	);
};

export default PostIdPage;
