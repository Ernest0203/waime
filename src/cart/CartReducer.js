const initialState = {
	data: [],
	cartItems: 0,
	cartIsOpen: false,
	popupContent: 'cart',
};

export default function cart(state = initialState, action) {
	let data;

	switch (action.type) {
		case 'CART_TOGGLE':
			return {...state, cartIsOpen: !state.cartIsOpen}
		case 'ADD_TO_CART':
			data = state.data.findIndex(i => i.name === action.data.name) > -1
				? state.data.map((item) => {
						if (item.name === action.data.name) return action.data;
						return item;
					})
				: state.data.concat(action.data);
			return {
				...state,
				data: data,
				cartItems: data.length,
			}
		case 'REMOVE_ITEM':
			data = state.data.filter(item => item.name !== action.item)
			return {
				...state,
				data: data
			}
		case 'CART_ITEMS_COUNT':
			return {
				...state,
				cartItems: state.data.length
			}
		default:
			return state
	}
}