import { useContext } from 'react';
import Button from '../../common/button/Button';
import { ButtonType } from '../../common/button/button.type';
import Svg from '../../common/icons/Svg';
import { SvgType } from '../../common/icons/svgType';
import { CreateContext } from '../../../hooks/useContext';
import { TypeReducer } from '../../../hooks/useContext/reducer';

function Navbar() {
	const { dispatch } = useContext(CreateContext);
	return (
		<div className='navbar'>
			<div className='navbar__logo'>
				<Svg type={SvgType.Logo} width={222} height={34} />
			</div>

			<div className='navbar__sidebar'>
				<h1>Traductor rápido</h1>
			</div>

			<div className='navbar__login'>
				<Button
					type={ButtonType.Link}
					text='Cerrar sesión'
					handleClick={() => dispatch({ type: TypeReducer.LOGOUT })}
					id='logout'
					isLoading={false}
					svgLeft={SvgType.User}
				/>
			</div>
		</div>
	);
}
export default Navbar;
