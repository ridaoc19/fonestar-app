import { useReducer } from 'react';
import { RequestLogin, requestLogin } from '../../services/auth';
import { initialState, reducer, TypeReducer } from './reducer';

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

	return {
		dispatch,
		selector,
		login,
	};
}

export default State;
