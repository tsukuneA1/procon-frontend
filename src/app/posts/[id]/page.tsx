import { PostDetailComponent } from "@/components/post-detail";
import type { PostDetail } from "@/types/post_detail";

type Props = {
	params: {
		id: string;
	};
};

export default async function Page({ params }: Props) {
	const postId = params.id;

	const postRes = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/posts/${postId}`,
		{
			cache: "no-store",
		},
	);

	if (!postRes.ok) {
		throw new Error(`Failed to fetch post with id: ${postId}`);
	}

	const post: PostDetail = await postRes.json();

	return (
		<div className="mx-auto max-w-2xl space-y-6 p-4">
			<PostDetailComponent post={post} />
		</div>
	);
}
