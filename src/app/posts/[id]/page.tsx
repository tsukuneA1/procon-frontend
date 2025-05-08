import { PostDetail } from "@/components/post-detail";
import type { Post } from "@/types/post";

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

	const post: Post = await postRes.json();

	return <PostDetail post={post} />;
}
