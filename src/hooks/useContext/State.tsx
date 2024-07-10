import { useReducer } from 'react';
import { RequestLogin, requestLogin } from '../../services/auth';
import { initialState, reducer, TypeReducer } from './reducer';
import { promptsApi, UpdateFeedbackApi, updateFeedbackApi } from '../../services/prompt';

function State() {
	const [selector, dispatch] = useReducer(reducer, initialState);

	const login = async ({ email, password }: RequestLogin) => {
		dispatch({ type: TypeReducer.STATUS, payload: 'pending' });
		try {
			const { data, error } = await requestLogin({ email, password });
			if (error) {
				dispatch({ type: TypeReducer.ERROR, payload: error });
			}
			if (data) {
				dispatch({ type: TypeReducer.LOGIN });
			}
		} catch (error) {
			if (error instanceof Error) {
				dispatch({ type: TypeReducer.ERROR, payload: error.message });
			}
		}
	};

	const getPrompts = async () => {
		dispatch({ type: TypeReducer.STATUS, payload: 'pending' });
		try {
			const { data, error } = await promptsApi();
			if (error) {
				dispatch({ type: TypeReducer.ERROR, payload: error });
			}
			if (data) {
				dispatch({ type: TypeReducer.PROMPT, user: data.user, prompts: data.prompts });
			}
		} catch (error) {
			if (error instanceof Error) {
				dispatch({ type: TypeReducer.ERROR, payload: error.message });
			}
		}
	};

	const updateFeedback = async ({ feedback, promptId }: UpdateFeedbackApi) => {
		dispatch({ type: TypeReducer.STATUS, payload: 'pending' });
		try {
			const { data, error } = await updateFeedbackApi({ promptId, feedback });
			if (error) {
				dispatch({ type: TypeReducer.ERROR, payload: error });
			}
			if (data) {
				console.log(data);
				dispatch({ type: TypeReducer.PROMPT, user: data.user, prompts: data.prompts });
			}
		} catch (error) {
			if (error instanceof Error) {
				dispatch({ type: TypeReducer.ERROR, payload: error.message });
			}
		}
	};
	return {
		updateFeedback,
		getPrompts,
		dispatch,
		selector,
		login,
	};
}

export default State;
