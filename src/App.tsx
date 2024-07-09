import { useContext, useEffect } from 'react';
import MessageList from './components/MessageList/MessageList';
import { CreateContext } from './hooks/useContext';
import { TypeReducer } from './hooks/useContext/reducer';
import Auth from './pages/Auth/Auth';
import './styles/app/app.scss';
import Layout from './components/layout/Layout';

export default function App() {
	const { dispatch, selector } = useContext(CreateContext);

	useEffect(() => {
		const token = localStorage.getItem('fstoken');
		if (token) {
			dispatch({ type: TypeReducer.LOGIN });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			<MessageList />
			{!selector.isLogin ? (
				<Auth />
			) : (
				<Layout>
					<h1>hola</h1>
				</Layout>
			)}
		</div>
	);
}
