import { PostCard } from "@/components/postCard";
import { MainLayout } from "@/layouts/main/layout";
import type { Post } from "@/types/post";
import { v4 as uuidv4 } from "uuid";
import { NewPost } from "./posts/newPost";

async function fetchPosts(): Promise<Post[]> {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/posts`);
	if (!res.ok) throw new Error(`HTTP Error! status: ${res.status}`);
	return await res.json();
}

export default async function Home() {
	const posts = await fetchPosts();

	return (
		<MainLayout>
			<NewPost />
			{posts.map((post) => (
				<PostCard key={uuidv4()} post={post} />
			))}
		</MainLayout>
	);
}
