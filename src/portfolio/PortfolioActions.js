export function fetchDataFromStorage(data) {

	dispatch(fetchDataFromStorageSucces(data));
}

function fetchDataFromStorageSucces(data) {
	return {
		type: 'FETCH_DATA_FROM_STORAGE',
		data
	}
}