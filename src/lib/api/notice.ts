import { Notice } from "@/types/notice";

export async function fetchNotice(token?: string): Promise<Notice[]> {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/notice/show`,
		{
			cache: "no-store",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		},
	);
	if (!response.ok) {
		throw new Error("Failed to fetch notices");
	}
	return response.json() as Promise<Notice[]>;
}
