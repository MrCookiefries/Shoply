import { Route, Routes } from "react-router-dom";
import CartItems from "./CartItems";
import InventoryList from "./InventoryList";
import ItemCard from "./ItemCard";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/">
				<Route index element={<InventoryList />} />
				<Route path="products">
					<Route path=":id" element={<ItemCard />} />
				</Route>
				<Route path="cart" element={<CartItems />} />
			</Route>
		</Routes>
	);
};

export default AppRoutes;
