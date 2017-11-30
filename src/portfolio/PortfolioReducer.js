const initialState = {
	projects: {
		old: {}
	}
};

export default function portfolio(state = initialState, action) {
	switch (action.type) {
		case 'FETCH_DATA':
			//return {...state, projects: action.data.projects}
		default:
			return state
	}
}