import { createContext, ReactNode } from 'react';
import State from './State';
import { initialState } from './reducer';

type StateReturn = ReturnType<typeof State>;

const initialStateContext: StateReturn = {
	dispatch: () => {
		/* no-op: dispatch is initialized later */
	},
	login: async () => Promise.resolve(),
	selector: initialState,
};

export const CreateContext = createContext<StateReturn>(initialStateContext);

export const StoreContext = ({ children }: { children: ReactNode }) => {
	const state = State();

	return <CreateContext.Provider value={state}>{children}</CreateContext.Provider>;
};
