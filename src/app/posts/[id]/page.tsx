"use client";

import { PostDetailComponent } from "@/components/postDetail";
import { MainLayout } from "@/layouts/main/layout";
import { fetchPostDetail } from "@/lib/api/post";
import type { Post } from "@/types/post";
import { useEffect, useState } from "react";

type Props = {
	params: {
		id: string;
	};
};

export default function Page({ params }: Props) {
	const [post, setPost] = useState<Post | null>(null);

	useEffect(() => {
		const getPost = async () => {
			try {
				const fetchedPost = await fetchPostDetail(params.id);
				setPost(fetchedPost);
			} catch (error) {
				console.error("Failed to fetch post:", error);
			}
		};

		getPost();
	}, [params.id]);

	if (!post) return <div>Loading...</div>;

	return (
		<MainLayout>
			<PostDetailComponent post={post} />
		</MainLayout>
	);
}
