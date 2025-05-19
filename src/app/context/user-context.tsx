"use client";

import type { User } from "@/types/users";
import { createContext, useContext, useEffect, useState } from "react";

type UserContextType = {
	user: User | null;
	setUser: (user: User | null) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		const fetchMe = async () => {
			const token = localStorage.getItem("token");
			if (!token) return;

			try {
				const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/me`, {
					credentials: "include",
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				if (res.ok) {
					const data = await res.json();
					setUser(data);
				}
			} catch (e) {
				console.error("ユーザー情報の取得に失敗:", e);
			}
		};

		fetchMe();
	}, []);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};

export const useUser = () => {
	const context = useContext(UserContext);
	if (!context) throw new Error("useUser must be used within UserProvider");
	return context;
};
