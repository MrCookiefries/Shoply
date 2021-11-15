import { cartTypes } from "./types";

const cartActions = {
	add: (itemId) => ({
		type: cartTypes.add,
		payload: itemId
	}),
	remove: (itemId) => ({
		type: cartTypes.remove,
		payload: itemId
	})
};

export default cartActions;
