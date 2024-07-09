export enum TypeReducer {
	CLEAR = 'CLEAR',
	ERROR = 'ERROR',
	CLOSE_ERROR = 'CLOSE_ERROR',
	LOGIN = 'LOGIN',
	LOGOUT = 'LOGOUT',
	STATUS = 'STATUS',
}

export interface TypeReducerMap {
	[TypeReducer.STATUS]: {
		type: TypeReducer.STATUS;
		payload: InitialState['status'];
	};
	[TypeReducer.CLEAR]: {
		type: TypeReducer.CLEAR;
	};
	[TypeReducer.ERROR]: {
		type: TypeReducer.ERROR;
		payload: InitialState['error'];
	};
	[TypeReducer.CLOSE_ERROR]: {
		type: TypeReducer.CLOSE_ERROR;
	};
	[TypeReducer.ERROR]: {
		type: TypeReducer.ERROR;
		payload: InitialState['error'];
	};
	[TypeReducer.LOGIN]: {
		type: TypeReducer.LOGIN;
	};
	[TypeReducer.LOGOUT]: {
		type: TypeReducer.LOGOUT;
	};
}

export interface AppAction<T> {
	type: keyof T;
	payload: T[keyof T];
}

export type Reducer = (state: InitialState, action: TypeReducerMap[TypeReducer]) => InitialState;

export interface InitialState {
	status: 'idle' | 'pending' | 'error' | 'success';
	isLogin: boolean;
	error: string;
}

export const initialState: InitialState = {
	status: 'idle',
	isLogin: false,
	error: '',
};

const reducer: Reducer = (state, action) => {
	switch (action.type) {
		case TypeReducer.STATUS:
			return { ...state, status: action.payload };

		case TypeReducer.CLEAR:
			return initialState;

		case TypeReducer.ERROR:
			return { ...state, status: 'error', error: action.payload };

		case TypeReducer.CLOSE_ERROR:
			return { ...state, status: 'idle', error: '' };

		case TypeReducer.LOGIN:
			return { ...state, status: 'success', isLogin: true };

		case TypeReducer.LOGOUT:
			localStorage.removeItem('fstoken');
			return { ...state, status: 'idle', isLogin: false };

		default:
			return state;
	}
};

export { reducer };
