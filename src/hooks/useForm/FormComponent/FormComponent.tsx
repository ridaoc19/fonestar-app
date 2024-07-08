import { Dispatch, MouseEvent, SetStateAction } from 'react';
import type { InitialState } from '../useForm';
import { ButtonProps } from '../../../components/common/button/button.type';
import { SvgType } from '../../../components/common/icons/svgType';
import Svg from '../../../components/common/icons/Svg';
import Input from '../../../components/common/input/Input';
import Button from '../../../components/common/button/Button';

export interface FormComponentProps<K extends string> {
	component: string;
	state: InitialState<K>[];
	setState: Dispatch<SetStateAction<InitialState<K>[]>>;
	buttons: { bId: string; bText: ButtonProps['text']; bType: ButtonProps['type']; bValidate?: boolean }[];
	handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function FormComponent<K extends string>({
	state,
	setState,
	buttons,
	component,
	handleClick,
}: FormComponentProps<K>) {
	return (
		<div className='form-component-container'>
			<div className='form-component'>
				<header className='form-component__logo'>
					<Svg type={SvgType.Logo} width={92} height={87} />
				</header>
				<form className='form-component__form'>
					<section className='form-component__form--inputs'>
						{state.map(stateItem => {
							const { iName, iPlaceholder, disabled } = stateItem;
							const svgType =
								SvgType[(iName.charAt(0).toUpperCase() + iName.slice(1)) as keyof typeof SvgType] || iName;

							let autoCompleteValue;
							if (iName === 'password') {
								autoCompleteValue = 'current-password';
							} else if (iName === 'newPassword') {
								autoCompleteValue = 'new-password';
							} else {
								autoCompleteValue = iName;
							}

							return (
								<Input
									key={iName}
									name={iName}
									svgLeft={svgType}
									disabled={disabled}
									placeholder={iPlaceholder}
									other_attributes={{ autoComplete: autoCompleteValue }}
									result={({ value }) => {
										setState(prevState =>
											prevState.map(item => (item.iName === iName ? { ...item, [iName]: value } : item))
										);
									}}
								/>
							);
						})}
					</section>
					<section className='form-component__form--buttons'>
						{buttons.map(({ bId, bText, bType, bValidate }) => (
							<Button
								key={bId}
								id={`button__${component}--${bId}`}
								type={bType}
								text={bText}
								// isLoading={status === 'pending' && !!bValidate}
								// disabled={status === 'pending'}
								value={bId}
								handleClick={handleClick}
							/>
						))}
					</section>
				</form>
			</div>
		</div>
	);
}
