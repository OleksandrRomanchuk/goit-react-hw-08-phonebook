import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { store, persistor } from 'redux/store';
import App from 'components/App/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter basename="/goit-react-hw-07-phonebook">
					<Suspense>
						<App />
					</Suspense>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
