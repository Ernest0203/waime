const initialState = {
	about: null
};

export default function skills(state = initialState, action) {
	switch (action.type) {
		case 'FETCH_DATA':
			//return {...state, about: action.data.about}
		default:
			return state
	}
}