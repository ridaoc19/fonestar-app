import _color from '../../../styles/index/global/_color';
import Button from '../../common/button/Button';
import { ButtonType } from '../../common/button/button.type';
import Svg from '../../common/icons/Svg';
import { SvgType } from '../../common/icons/svgType';

function Footer() {
	return (
		<div className='footer'>
			<div className='footer__container'>
				<div className='footer__top'>
					<div className='footer__top-left'>
						<div className='footer__top-left-logo'>
							<img
								src='https://fonestar.com/wp-content/uploads/2022/10/favicon.png'
								width={80}
								alt=''
							/>
						</div>
					</div>

					<div className='footer__top-center'>
						<div className='footer__top-center-container'>
							<div className='footer__top-center-title'>
								<h4>¿Necesitas ayuda?</h4>
							</div>
							<div className='footer__top-center-content'>
								<Button
									type={ButtonType.Link}
									text='consultas@fonestar.es'
									handleClick={() => ''}
									id='email'
									isLoading={false}
									svgLeft={SvgType.Email}
								/>
								<Button
									type={ButtonType.Link}
									text='+34 942 254 555'
									handleClick={() => ''}
									id='phone'
									isLoading={false}
									svgLeft={SvgType.Phone}
								/>
								<Button
									type={ButtonType.Link}
									text='Lunes - Viernes de 8 AM - 6 PM'
									handleClick={() => ''}
									id='time'
									isLoading={false}
									svgLeft={SvgType.Time}
								/>
							</div>
						</div>
					</div>

					<div className='footer__top-right'>
						<div className='footer__top-right-container'>
							<div className='footer__top-right-social-networks-title'>
								<h4>Síguenos</h4>
							</div>
							<div className='footer__top-right-social-networks-icon'>
								{Svg({
									type: SvgType.Instagram,
									height: 20,
									width: 20,
									color: _color['--base-main'],
								})}
								{Svg({
									type: SvgType.Facebook,
									height: 20,
									width: 20,
									color: _color['--base-main'],
								})}
								{Svg({
									type: SvgType.LinkedIn,
									height: 20,
									width: 20,
									color: _color['--base-main'],
								})}
								{Svg({
									type: SvgType.Twitter,
									height: 20,
									width: 20,
									color: _color['--base-main'],
								})}
								{Svg({
									type: SvgType.Snapchat,
									height: 20,
									width: 20,
									color: _color['--base-main'],
								})}
								{Svg({
									type: SvgType.Messenger,
									height: 20,
									width: 20,
									color: _color['--base-main'],
								})}
								{Svg({
									type: SvgType.Whatsapp,
									height: 20,
									width: 20,
									color: _color['--base-main'],
								})}
							</div>
						</div>
					</div>
				</div>

				<div className='footer__bottom'>
					<div className='footer__bottom-text'>
						<p>© 2024 Fonestar</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
