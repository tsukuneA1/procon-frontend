import type { User } from "@/types/users";

export const MOCK_CURRENT_USER: User = {
	id: 1,
	created_at: "2025-05-08T13:48:43.603Z",
	name: "Larry Shields",
	email: "christy_adams@reinger.example",
	password: "password",
	image: "https://robohash.org/doloribusmagniipsa.png?size=300x300&set=set1",
	profile: {
		id: 1,
		user_id: 1,
		bio: "Eos ut cupiditate. Rerum vel nostrum.",
		created_at: "2025-05-08T13:48:43.784Z",
		updated_at: "2025-05-08T13:48:43.784Z",
	},
} as const;
