import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StoreContext } from './hooks/useContext';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<StoreContext>
			<App />
		</StoreContext>
	</React.StrictMode>,
);
