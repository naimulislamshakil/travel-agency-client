import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { HashLoader } from 'react-spinners';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Suspense
				fallback={
					<HashLoader
						color="#b71c1c"
						style={{ display: 'flex', alignItems: 'center' }}
					/>
				}
			>
				<App />
			</Suspense>
		</BrowserRouter>
	</React.StrictMode>
);
