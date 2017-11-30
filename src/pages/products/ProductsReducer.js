const initialState = {
	firstLoad: true,
	data: [],
	popupItem: {},
	popupIsOpen: false,
};

export default function portfolio(state = initialState, action) {
	switch (action.type) {
		case 'FETCH_DATA_SUCCES':
			const data = Object.keys(action.data).map((key) => action.data[key]);
			return {...state, data: data, firstLoad: false}
		case 'POPUP_TOGGLE':
			return { ...state, popupIsOpen: !state.popupIsOpen }
		case 'POPUP_ITEM':
			return { ...state, popupItem: { ...action.data } }
		default:
			return state
	}
}