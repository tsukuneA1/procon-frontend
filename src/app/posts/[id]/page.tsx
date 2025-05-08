import { PostDetail } from "@/components/post-detail";
import type { Post } from "@/types/post";

type Props = {
	params: {
		id: string;
	};
};

export default async function Page({ params }: Props) {
	const postId = params.id;

	const postRes = await fetch(`http://localhost:3000/api/v1/posts/${postId}`, {
		cache: "no-store",
	});

	if (!postRes.ok) {
		throw new Error(`Failed to fetch post with id: ${postId}`);
	}

	const post: Post = await postRes.json();

	return <PostDetail post={post} />;
}
