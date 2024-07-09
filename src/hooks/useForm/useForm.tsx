import { MouseEvent, ReactNode, useContext, useState } from 'react';
import { ButtonProps } from '../../components/common/button/button.type';
import { InputProps } from '../../components/common/input/Input';
import FormComponent from './FormComponent/FormComponent';
import useValidations from '../useValidations/useValidations';
import { CreateContext } from '../useContext';
import { TypeReducer } from '../useContext/reducer';

export interface UseFormProps<T, K> {
	isLogo?: boolean;
	component: string;
	inputs: { iName: K; iPlaceholder: InputProps['placeholder'] }[];
	buttons: {
		bId: T;
		bText: ButtonProps['text'];
		bType: ButtonProps['type'];
		bValidate?: boolean;
	}[];
}

export type InitialState<K extends string> = {
	[key in K]: string;
} & {
	iName: string;
	iPlaceholder: string;
	disabled: boolean;
};

export interface UseFormReturn<T, K extends string> {
	Component: ReactNode;
	eventClick: { value: T; state: InitialState<K>[] };
	body: { [key in K]: string };
}

export default function useForm<T extends string, K extends string>({
	inputs,
	isLogo = true,
	buttons,
	component,
}: UseFormProps<T, K>): UseFormReturn<T, K> {
	const { getValidationErrors } = useValidations();
	const { dispatch } = useContext(CreateContext);
	const [eventClick, setEventClick] = useState<UseFormReturn<T, K>['eventClick']>({
		state: [],
		value: '' as T,
	});
	const [state, setState] = useState<InitialState<K>[]>(
		inputs.map(({ iName, iPlaceholder }) => {
			return {
				[iName]: '',
				error: '',
				iName,
				iPlaceholder,
				disabled: false,
			} as InitialState<K>;
		}),
	);

	const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
		const { value } = event.target as HTMLButtonElement;
		if (buttons.find(({ bId }) => bId === value)?.bValidate) {
			const validateError: string[] = state
				.map(item => {
					const { message } = getValidationErrors({
						name: item.iName,
						value: item[item.iName as K],
					});
					return message ? `${message}` : '';
				})
				.filter(Boolean);

			if (validateError.length > 0) {
				dispatch({ type: TypeReducer.ERROR, payload: '- ' + validateError.join('\n- ') });
			} else {
				setEventClick({ state, value: value as T });
			}
		} else {
			setEventClick({ state, value: value as T });
		}
	};

	return {
		Component: (
			<FormComponent
				isLogo={isLogo}
				component={component}
				state={state}
				buttons={buttons}
				setState={setState}
				handleClick={handleOnClick}
			/>
		),
		eventClick,
		body: state.reduce(
			(acc, item) => {
				const key = item.iName as K;
				return { ...acc, [key]: item[key] };
			},
			{} as Record<K, string>,
		),
	};
}
