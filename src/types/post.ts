export type Post = {
	id: string;
	content: string;
	created_at: string;
	updated_at: string;
	user_id: number;
	status: string;
	user: {
		id: number;
		name: string;
		image: string;
	};
};
