import _color from '../../../styles/index/global/_color';
import Svg from '../icons/Svg';
import Spinner from '../spinner';
import { ButtonProps } from './button.type';

function Button({
	id,
	type,
	handleClick,
	text,
	isLoading = false,
	value = '',
	disabled = false,
	other_attributes = {},
	svgLeft = null,
	svgRight = null,
}: ButtonProps) {
	return (
		<button
			type='button'
			id={`button__${id}`}
			className={`button button_${type}`}
			onClick={handleClick}
			value={value}
			disabled={disabled}
			aria-label={`Click para ${id}`}
			{...other_attributes}
		>
			{svgLeft && (
				<span className='button__svg-left'>
					{Svg({
						type: svgLeft,
						height: 16,
						width: 16,
						color: _color['--base-light'],
					})}
				</span>
			)}
			{text && (
				<span className='button__text-container'>
					<div>{isLoading ? <Spinner /> : text}</div>
				</span>
			)}
			{svgRight && (
				<span className='button__svg-right'>
					{Svg({
						type: svgRight,
						height: 16,
						width: 16,
						color: _color['--base-light'],
					})}
				</span>
			)}
		</button>
	);
}

export default Button;
