import { ButtonHTMLAttributes, MouseEvent, ReactNode } from 'react';
import { SvgType } from '../icons/svgType';

export enum ButtonType {
	Dark = 'dark',
	Link = 'link',
	Highlighter = 'highlighter',
	None = 'none',
	Information = 'information',
	Warning = 'warning',
	Success = 'success',
	Error = 'error',
}

export interface ButtonProps {
	id: string;
	type: ButtonType;
	text: string | ReactNode;
	handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
	isLoading?: boolean;

	svgRight?: SvgType | null;
	svgLeft?: SvgType | null;
	other_attributes?: ButtonHTMLAttributes<HTMLButtonElement>;
	disabled?: boolean;
	value?: string | number;
}
