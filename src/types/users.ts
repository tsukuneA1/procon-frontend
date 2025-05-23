export type User = {
	id: number;
	createdAt: string;
	image: string;
	name: string;
	email: string;
	password: string;
	profile: {
		id: number;
		userId: number;
		bio: string;
		createdAt: string;
		updatedAt: string;
	};
};
