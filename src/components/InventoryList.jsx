import { shallowEqual, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const InventoryList = () => {
	const inventory = useSelector((store) => store.inventory, shallowEqual);

	return (
		<section>
			<h2>Our Inventory</h2>
			{Object.entries(inventory).map(([k, v]) => (
				<Link
					style={{ display: "block", margin: "1em 0" }}
					key={k}
					to={`products/${k}`}
				>
					<h3>{v.name}</h3>
				</Link>
			))}
		</section>
	);
};

export default InventoryList;
