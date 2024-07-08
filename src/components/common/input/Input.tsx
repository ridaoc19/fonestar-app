import { InputHTMLAttributes, MouseEvent, useEffect, useState } from 'react';
import useValidations from '../../../hooks/useValidations/useValidations';
import Svg from '../icons/Svg';
import { SvgType } from '../icons/svgType';
import {
	getBorderColor,
	getClassNameModifier,
	getInputType,
	getSvgColor,
	svgTypePassword,
} from './help';

export interface InputProps {
	name: string;
	placeholder: string;
	result: (data: { value: number | string }) => void;

	initialValue?: number | string;
	disabled?: boolean;
	svgLeft?: SvgType;
	svgRight?: SvgType;
	other_attributes?: InputHTMLAttributes<HTMLInputElement>;
}

function Input({
	svgLeft,
	svgRight,
	name,
	placeholder,
	disabled,
	other_attributes,
	result,
	initialValue,
}: InputProps) {
	const { getValidationErrors } = useValidations();
	const [{ value, error }, setState] = useState<{ value: string | number; error: string }>({
		value: initialValue || '',
		error: '',
	});
	const [toggle, setToggle] = useState(false);
	const newSvgLeft = svgLeft === ('newPassword' as SvgType) ? SvgType.Password : svgLeft;
	const newSvgRight =
		newSvgLeft === SvgType.Password ? svgTypePassword(newSvgLeft, toggle) : svgRight;

	const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		setToggle(!toggle);
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLSpanElement>) => {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			setToggle(!toggle);
		}
	};

	useEffect(() => {
		if (!error) {
			result({ value });
		} else {
			result({ value: '' });
		}
	}, [value, error]);

	let autoCompleteValue;
	if (name === 'password') {
		autoCompleteValue = 'current-password';
	} else if (name === 'newPassword') {
		autoCompleteValue = 'new-password';
	} else {
		autoCompleteValue = name;
	}

	return (
		<div className={`input input__container${name && `--${name}`}`}>
			<label htmlFor={`input__${name}`} className={`input__label ${value ? 'active' : ''}`}>
				{placeholder}
			</label>

			<div
				className={`${error ? 'input_error' : 'input_brand'} input__content${name && `--${name}`}`}
			>
				<span
					style={{
						border: `1px solid ${getBorderColor(error, value)}`,
					}}
				>
					<span className={`input__svg-left${name && `--${name}`}`}>
						{newSvgLeft &&
							Svg({
								type: newSvgLeft,
								height: 16,
								width: 16,
								color: getSvgColor(error),
							})}
					</span>
					<input
						id={`input__${name}`}
						data-testid='input'
						type={getInputType(name, toggle)}
						placeholder={!value ? placeholder : ''}
						value={value}
						onChange={({ target }) => {
							const { stop, message } = getValidationErrors({ name, value: target.value });
							setState({ error: message, value: stop ? value : target.value });
						}}
						name={name}
						disabled={disabled}
						autoComplete={autoCompleteValue}
						{...other_attributes}
					/>
					<span
						className={getClassNameModifier('input__svgTwo', name)}
						onClick={handleOnClick}
						onKeyDown={handleKeyDown}
						role='button'
						tabIndex={0}
					>
						{newSvgRight &&
							Svg({
								type: newSvgRight,
								height: 16,
								width: 16,
								color: getSvgColor(error),
							})}
					</span>
				</span>
			</div>

			<div className={`input__error${name && `--${name}`}`}>
				<div>
					<div className={`input__message${name && `--${name}`}`}>
						<span>{error}</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Input;
