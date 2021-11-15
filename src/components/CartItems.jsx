import { shallowEqual, useDispatch, useSelector } from "react-redux";
import cartActions from "../store/actions/cart";

const CartItems = () => {
	const cart = useSelector((store) => store.cart, shallowEqual);
	const uniqueCart = [...new Set(cart)];
	const inventory = useSelector((store) => store.inventory, shallowEqual);
	const items = uniqueCart.map((id) => ({ ...inventory[id], id }));

	const getCount = (id) => cart.filter((c) => c === id).length;

	const dispatch = useDispatch();

	const addToCart = (id) => dispatch(cartActions.add(id));
	const removeFromCart = (id) => dispatch(cartActions.remove(id));

	return (
		<section>
			<h2>Your cart</h2>
			<ul>
				<li>Total Items: {cart.length}</li>
				<li>Total Unique Items: {uniqueCart.length}</li>
			</ul>
			<div>
				{items.map((i) => (
					<figure key={i.name}>
						<div>
							<p>
								<b>{i.name}</b>
							</p>
							<p>Price: ${i.price}</p>
							<p>Quantity: {getCount(i.id)}</p>
							<p>Total Price: ${getCount(i.id) * i.price}</p>
							<img width="300px" height="auto" src={i.image_url} alt={i.name} />
							<p>{i.description}</p>
						</div>
						<div>
							<button onClick={() => addToCart(i.id)} type="button">
								Add 1 to cart
							</button>
							<button onClick={() => removeFromCart(i.id)} type="button">
								Remove 1 from cart
							</button>
						</div>
					</figure>
				))}
			</div>
		</section>
	);
};

export default CartItems;
