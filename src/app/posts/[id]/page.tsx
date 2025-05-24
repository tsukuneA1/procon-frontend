"use client";

import { PostDetailComponent } from "@/components/postDetail";
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
	const [token, setToken] = useState<string | null>(null);

	useEffect(() => {
		setToken(localStorage.getItem("token"));
	}, []);

	useEffect(() => {
		if (!token) return;

		async function load() {
			const postData = await fetchPostDetail(params.id, token);
			setPost(postData);
		}
		load();
	}, [params.id, token]);

	if (!post) return <div>Loading...</div>;

	return (
		<div className="mx-auto space-y-6">
			<PostDetailComponent post={post} />
		</div>
	);
}
