import type { PostDetail } from "@/types/post_detail";

export async function fetchPostDetail(postId: string): Promise<PostDetail> {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/posts/${postId}`,
		{
			cache: "no-store",
		},
	);

	if (!res.ok) {
		throw new Error(`Failed to fetch post with id: ${postId}`);
	}

	return await res.json();
}

export async function createPost(
	content: string,
	userId: number | undefined,
): Promise<void> {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/posts`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			content,
			user_id: userId,
		}),
	});

	if (!res.ok) {
		throw new Error(`Failed to create post: ${res.statusText}`);
	}
}

export async function postReply({
	content,
	replyToId,
	userId,
}: {
	content: string;
	replyToId: number;
	userId: number | undefined;
}): Promise<void> {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/posts/${replyToId}/replies`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				content,
				reply_to_id: replyToId,
				user_id: userId,
			}),
		},
	);

	if (!res.ok) {
		throw new Error(`Failed to post reply: ${res.statusText}`);
	}
}
