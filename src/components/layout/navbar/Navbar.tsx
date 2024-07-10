import { useContext } from 'react';
import { CreateContext } from '../../../hooks/useContext';
import { TypeReducer } from '../../../hooks/useContext/reducer';
import Button from '../../common/button/Button';
import { ButtonType } from '../../common/button/button.type';
import { SvgType } from '../../common/icons/svgType';
import Svg from '../../common/icons/Svg';

function Navbar() {
	const { dispatch, selector } = useContext(CreateContext);
	return (
		<div className='navbar'>
			<div className='navbar__logo'>
				<img src='https://fonestar.com/wp-content/uploads/2022/10/favicon.png' width={30} alt='' />
			</div>

			<div className='navbar__center'>
				<Svg type={SvgType.Logo} width={100} height={14} />
				<p>{selector.user}</p>
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
