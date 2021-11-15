import { shallowEqual, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import './App.css';
import AppRoutes from './components/AppRoutes';

const App = () => {
	const cart = useSelector(store => store.cart, shallowEqual);

	return (
		<div className="App">
			<Link to="/"><h1>Shoply</h1></Link>
			<p>Cart total: {cart.length}</p>
			<Link to="cart">Go to cart</Link>
			<AppRoutes />
			<Outlet />
		</div>
	);
}

export default App;
