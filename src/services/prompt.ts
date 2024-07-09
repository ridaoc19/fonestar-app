const API_BASE_URL = process.env.API_BASE_URL;
const API_KEY = process.env.API_KEY;

export const promptsApi = async (): Promise<{
	data: { user: string; prompts: GPrompt.PromptApiResponse['_items'] } | null;
	error: string | null;
}> => {
	try {
		if (!API_BASE_URL || !API_KEY) {
			throw new Error('Faltan variables de entorno');
		}
		const token = localStorage.getItem('fstoken');
		if (!token) {
			throw new Error('No se encontró el token. Por favor, inicie sesión.');
		}

		const response = await fetch(
			`${API_BASE_URL}/ia/models/modelo_traductor/prompts?page=1&pagesize=10`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'X-API-KEY': API_KEY ?? '',
					fstoken: token,
				},
			},
		);

		if (!response.ok) {
			throw new Error(`Error al obtener los prompts: ${response.status} ${response.statusText}`);
		}

		const { login, _items }: GPrompt.PromptApiResponse = await response.json();
		return { error: null, data: { user: login.user, prompts: _items } };
	} catch (error) {
		if (error instanceof Error) {
			return {
				data: null,
				error: error.message || 'Error al obtener los prompts.',
			};
		}
		console.error('Error al obtener los prompts:', error);
		return {
			data: null,
			error: 'Error al obtener los prompts.',
		};
	}
};

export interface UpdateFeedbackApi {
	promptId: string;
	feedback: string;
}

export const updateFeedbackApi = async ({ promptId, feedback }: UpdateFeedbackApi) => {
	try {
		if (!API_BASE_URL || !API_KEY) {
			throw new Error('Faltan variables de entorno');
		}
		const token = localStorage.getItem('fstoken');
		if (!token) {
			throw new Error('No se encontró el token. Por favor, inicie sesión.');
		}

		const response = await fetch(`${API_BASE_URL}/ia/models/modelo_traductor/prompts/${promptId}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				'X-API-KEY': API_KEY,
				fstoken: token,
			},
			body: JSON.stringify({
				Feedback: feedback,
			}),
		});

		const result = await response.json();
		if (!response.ok) {
			throw new Error(result['status-details']);
		}

		return result;
	} catch (error) {
		console.error('Error al actualizar el feedback:', error);
		if (error instanceof Error) {
			return {
				data: null,
				error: error.message || 'Error al actualizar el feedback.',
			};
		}
		return {
			data: null,
			error: 'Error al actualizar el feedback.',
		};
	}
};
