import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { store } from 'redux/store';
import App from 'App/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter basename="/goit-react-hw-08-phonebook">
					<Suspense>
						<App />
					</Suspense>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
