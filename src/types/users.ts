export type User = {
	id: number;
	created_at: string;
	image: string;
	name: string;
	email: string;
	password: string;
	profile: {
		id: number;
		user_id: number;
		bio: string;
		created_at: string;
		updated_at: string;
	};
};
