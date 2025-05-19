import { PostDetailComponent } from "@/components/postDetail";
import { fetchPostDetail } from "@/lib/api/post";
import type { PostDetail } from "@/types/post_detail";

type Props = {
	params: {
		id: string;
	};
};

export default async function Page({ params }: Props) {
	const post: PostDetail = await fetchPostDetail(params.id);

	return (
		<div className="mx-auto max-w-2xl space-y-6 p-4">
			<PostDetailComponent post={post} />
		</div>
	);
}
