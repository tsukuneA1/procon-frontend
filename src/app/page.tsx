import { PostCard } from "@/components/post-card";
import { MainLayout } from "@/layouts/main/layout";
import type { Post } from "@/types/post";
import type { User } from "@/types/users";
import { v4 as uuidv4 } from "uuid";
import { NewPost } from "./posts/newPost";

async function fetchPosts(): Promise<Post[]> {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts`);
	if (!res.ok) throw new Error(`HTTP Error! status: ${res.status}`);
	return await res.json();
}

async function fetchUser(): Promise<User> {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/1`);
	if (!res.ok) throw new Error(`HTTP Error! status: ${res.status}`);
	return await res.json();
}

export default async function Home() {
	const posts = await fetchPosts();
	const user = await fetchUser();

	return (
		<MainLayout>
			<NewPost user={user} />
			{posts.map((post) => (
				<PostCard key={uuidv4()} post={post} />
			))}
		</MainLayout>
	);
}
