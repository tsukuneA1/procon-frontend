import { PostCard } from "@/components/postCard";
import { MainLayout } from "@/layouts/main/layout";
import type { Post } from "@/types/post";
import { v4 as uuidv4 } from "uuid";

type Props = {
	params: {
		id: string;
	};
};

export default async function Page({ params }: Props) {
	const userId = params.id;

	const userPostsRes = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/posts/user/${userId}`,
		{
			cache: "no-store",
		},
	);

	if (!userPostsRes.ok) {
		throw new Error(`Failed to fetch post with id: ${userId}`);
	}

	const posts: Post[] = await userPostsRes.json();

	return (
		<MainLayout>
			{posts.map((post) => (
				<PostCard key={uuidv4()} post={post} />
			))}
		</MainLayout>
	);
}
