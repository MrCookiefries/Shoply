import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import cartActions from "../store/actions/cart";

const ItemCard = () => {
	const dispatch = useDispatch();

	const addToCart = () => dispatch(cartActions.add(id));
	const removeFromCart = () => dispatch(cartActions.remove(id));

	const { id } = useParams();
	const item = useSelector((store) => store.inventory[id]);

	if (!item) return <Navigate to="/" />;

	const { name, price, description, image_url: imageUrl } = item;

	return (
		<figure>
			<div>
				<p>
					<b>{name}</b>
				</p>
				<p>Price: ${price}</p>
				<img width="300px" height="auto" src={imageUrl} alt={name} />
				<p>{description}</p>
			</div>
			<div>
				<button onClick={addToCart} type="button">
					Add 1 to cart
				</button>
				<button onClick={removeFromCart} type="button">
					Remove 1 from cart
				</button>
			</div>
		</figure>
	);
};

export default ItemCard;
