export async function POST_URL(url, data, token) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify(data),
        credentials: "include",
    });
    return response;
}

export function validateEmail(email) {
	const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return regex.test(email);
}

//! regex for full password
export function validatePassword(password) {
	const regex = /^(?=.*[a-zA-Z])(?=.*[0-9@#$%^&*])(?=.{8,}).*$/;
	return regex.test(password);
}

//* at least 1 letter
export function validatePassword1(password) {
	const regex = /^(?=.*[a-zA-Z]).*$/;
	return regex.test(password);
}

//* at least 1 number or special character
export function validatePassword2(password) {
	const regex = /^(?=.*[0-9@#$%^&*]).*$/;
	return regex.test(password);
}

//* at least 8 characters
export function validatePassword3(password) {
	const regex = /^(?=.{8,}).*$/;
	return regex.test(password);
}