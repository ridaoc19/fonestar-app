import { ReactNode } from 'react';
import Footer from './footer';
import Navbar from './navbar/Navbar';

function Layout({ children }: { children: ReactNode }) {
	return (
		<div className='layout'>
			<div className='layout__navbar'>
				<div className='layout__navbar-container'>
					<div className='layout__navbar-content'>
						<Navbar />
					</div>
				</div>
			</div>
			<div className='layout__children'>
				<div className='layout__children-container'>{children}</div>
			</div>
			<div className='layout__footer'>
				<Footer />
			</div>
		</div>
	);
}

export default Layout;
