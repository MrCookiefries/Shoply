import { cartTypes } from "../actions/types";

const cart = (state = [], action) => {
	const { payload } = action;
	switch (action.type) {
		case cartTypes.add:
			return [...state, payload];
		case cartTypes.remove:
			const idx = state.indexOf(payload);
			return state.filter((_, i) => i !== idx);
		default:
			return state;
	}
};

export default cart;
