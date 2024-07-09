export interface SvgProps {
	type: SvgType;
	width?: number;
	height?: number;
	color?: string;
}

export enum SvgType {
	User = 'user',
	Name = 'name',
	LastName = 'lastName',
	OpenEye = 'openEye',
	ClosedEye = 'closedEye',
	Logo = 'logo',
	Password = 'password',
	Email = 'email',
	NewEmail = 'newEmail',
	ArrowLeft = 'arrowLeft',
	ArrowRight = 'arrowRight',
	ArrowTop = 'arrowTop',
	ArrowBottom = 'arrowBottom',
	Close = 'close',
	Spanish = 'Spanish',
	English = 'English',
}
