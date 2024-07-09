export interface RequestLogin {
	email: string;
	password: string;
}

export const requestLogin = async ({
	email,
	password,
}: RequestLogin): Promise<{ data: User | null; error: string | null }> => {
	const API_BASE_URL = process.env.API_BASE_URL;
	const API_KEY = process.env.API_KEY;
	try {
		if (!API_BASE_URL || !API_KEY) {
			throw new Error('Faltan variables de entorno');
		}
		const response = await fetch(`${API_BASE_URL}/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-API-KEY': API_KEY,
			},
			body: JSON.stringify({
				fs_user: email,
				fs_key: password,
			}),
		});

		if (!response.ok) {
			throw new Error(
				'Por favor, verifique que ha ingresado correctamente sus credenciales o solicita una nueva cuenta.',
			);
		}

		const data: User = await response.json();
		const token = data['api-token'];
		if (token) {
			localStorage.setItem('fstoken', token);
			return { data, error: null };
		} else {
			throw new Error('No se recibió el token');
		}
	} catch (error) {
		if (error instanceof Error) {
			return {
				data: null,
				error: error.message || 'El inicio de sesión falló. Por favor, verifica tus credenciales.',
			};
		}
		console.error('Error durante el inicio de sesión:', error);
		return {
			data: null,
			error: 'El inicio de sesión falló. Por favor, verifica tus credenciales.',
		};
	}
};
