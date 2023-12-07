import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HomePage, LoginPage, RegisterPage } from './Route';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
			</Routes>
		</>
	);
}

export default App;
