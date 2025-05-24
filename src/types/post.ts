export type Post = {
	id: number;
	content: string;
	createdAt: string;
	updatedAt: string;
	userId: number;
	replyToId: number | null;
	user: {
		id: number;
		name: string;
		image: string;
		is_following: boolean;
	};
	repliesCount: number;
	likesCount: number;
	repostsCount: number;
	replies: Post[];
	isLiked: boolean;
};
