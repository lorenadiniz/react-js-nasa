import { put, call } from "redux-saga/effects";

import { isFetchingNEOsTrue, updateDate, updateNEOsDetail, errorFetchNEOsFalse, isFetchingNEOsFalse, errorFetchNEOsTrue } from "./actioncreators.js";

import axios from "axios";

const fetchNEOsAxios = (date) => {
	return axios.request({
		method: "get",
		url: `https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=DEMO_KEY&detailed=true`
	}).then(res => res.data);
	//axios retorna promise que retornará res.data como objeto res.data

}

function* fetchNEOsAsync(action) {

	try {
		// inicia a busca
		yield put(isFetchingNEOsTrue());
		// busca dados da API
		const data = yield call(fetchNEOsAxios, action.newDate);
		// atualiza date
		yield put(updateDate(action.newDate));
		// realiza update neos detail
		yield put(updateNEOsDetail(data));
		// error : false
		yield put(errorFetchNEOsFalse());
		//fim da busca
		yield put(isFetchingNEOsFalse());
	}
	catch (ex) {
		// is fetching : false
		yield put(isFetchingNEOsFalse());
		// error : true
		yield put(errorFetchNEOsTrue());
	}
}

export { fetchNEOsAsync };