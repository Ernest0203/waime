const initialState = {
	skillsData: {
		layout: {},
		ecmascript: {},
		learninginprogress: {}
	}
};

export default function skills(state = initialState, action) {
	switch (action.type) {
		case 'FETCH_DATA':
			//return {...state, skillsData: action.data.skills}
		default:
			return state
	}
}