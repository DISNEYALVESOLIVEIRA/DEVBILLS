import Home from "../pages/Home";
import Login from '../pages/Login';
import { BrowserRouter, Route, Routes } from "react-router";
import { AuthProvider, } from "../context/AuthContext";

const AppRoutes = () => {
	return (
		<BrowserRouter>
		<AuthProvider>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="*" element={<h2>Página não encontrada</h2>} />
			</Routes>
			</AuthProvider>
		</BrowserRouter>
	);
};

export default AppRoutes;
