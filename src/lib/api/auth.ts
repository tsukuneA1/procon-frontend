type SignUpParams = {
	name: string;
	email: string;
	password: string;
};

export const signup = async ({ name, email, password }: SignUpParams) => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/signup`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			user: {
				name,
				email,
				password,
				password_confirmation: password,
				image: null,
			},
		}),
	});

	const data = await res.json();

	if (!res.ok) {
		throw new Error(data.error || "サインアップ失敗");
	}

	return data;
};

export const signin = async (email: string, password: string) => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/signin`, {
		method: "POST",
		credentials: "include",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ email, password }),
	});

	if (!res.ok) {
		const error = await res.json();
		throw new Error(error.message || "Signin failed");
	}

	return await res.json();
};

export const signinWithGoogle = async (credential: string) => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/google`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			credential,
		}),
		credentials: "include",
	});
	const data = await res.json();
	if (!res.ok) {
		throw new Error(data.error || "Googleサインアップ失敗");
	}
	return data;
};
