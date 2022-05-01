// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import ApiService from 'app/services/api/';
// import axios from 'axios';

// export const getOne = createAsyncThunk('recado/getOne', async (id, { dispatch }) => {
// 	console.log("id")
// 	console.log(id)
// 	const response = await ApiService.getRecado(`${id}`);
// 	if (!response.success) {
// 		console.log("response.data")
// 		console.log(response)
// 		return response;
// 	}
// 	const { recado } = await response;

// 	console.log("recado")
// 	console.log(recado)
// 	return { ...recado };
// });
// export const getOne = createAsyncThunk('category/getOne', async (id, { dispatch }) => {
// 	const response = await ApiService.doGet(`/categories/${id}`);
// 	if (!response.success) {
// 		return response.data;
// 	}
// 	const { category } = await response.data;

// 	return { ...category };
// });

// export const saveOne = createAsyncThunk('recado/saveOne', async (data, { dispatch }) => {
// 	const request = { ...data };
//     console.log("request fdsfssdfrgfdfgdfg")
//     console.log(request)
// 	 const response = await ApiService.doPost('/recados', request);
// 	if (!response.success) {
// 		dispatch(updateResponse(response.data));
// 		return data;
// 	}
// 	const { recado } = await response.data;
// 	console.log("recado")
// 	console.log(recado)
// 	dispatch(getOne(recado.uid));

// 	return { ...data, message: response.message, success: response.success };
// });

// export const updateOne = createAsyncThunk('recados/updateOne', async ({ data, id }, { dispatch, getState }) => {
// 	const request = { ...data };

// 	const response = await ApiService.doPut(`/recados/${id}`, request);
// 	const oldState = getState().recado;

// 	if (!response.success) {
// 		dispatch(updateResponse(response.data));
// 		return { ...data, id, loading: false };
// 	}

// 	dispatch(getOne(id));

// 	return { ...oldState, message: response.message, success: response.success };
// });

// const initialState = {
// 	success: false,
// 	message: '',
// 	errorCode: '',
// 	loading: false,
// 	descricao: '',
// 	detalhe: ''
// };

// const recadoSlice = createSlice({
// 	name: 'recado',
// 	initialState,
// 	reducers: {
// 		newData: {
// 			reducer: (state, action) => action.payload,
// 			prepare: event => ({
// 				payload: {
// 					id: 'new',
// 					descricao: '',
// 					success: false,
// 					loading: false,
// 					message: '',
// 					errorCode: ''
// 				}
// 			})
// 		},
// 		clearState: (state, action) => initialState,
// 		updateState: (state, action) => {
// 			return { ...state, ...action.payload };
// 		},
// 		updateResponse: (state, action) => {
// 			state.success = action.payload.success;
// 			state.message = action.payload.message;
// 		},
// 		updateLoading: (state, action) => {
// 			state.loading = action.payload;
// 		}
// 	},
// 	extraReducers: {
// 		[getOne.fulfilled]: (state, action) => action.payload,
// 		[saveOne.fulfilled]: (state, action) => action.payload,
// 		[updateOne.fulfilled]: (state, action) => action.payload
// 	}
// });

// export const { newData, updateResponse, updateLoading } = recadoSlice.actions;

// export default recadoSlice.reducer;


// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import ApiService from 'app/services/api/';

// export const getOne = createAsyncThunk('recado/getOne', async (id, { dispatch }) => {
// 	const response = await ApiService.doGet(`/recados/${id}`);
// 	if (!response.success) {
// 		console.log(response)
// 		return response.data;
// 	}

// 	console.log("response")
// 	console.log(response)
// 	const { recado } = await response;

// 	return { ...recado };
// });

// export const saveOne = createAsyncThunk('recado/saveOne', async (data, { dispatch }) => {
// 	const request = { ...data };
// 	console.log("request")
// 	console.log(request)

// 	const response = await ApiService.doPost('/recado', request);
// 	if (!response.success) {
// 		dispatch(updateResponse(response));
// 		return data;
// 	}
// 	const { recado } = await response;

// 	dispatch(getOne(recado.uid));

// 	return { ...data, message: response.message, success: response.success };
// });

// export const updateOne = createAsyncThunk('recado/updateOne', async ({ data, id }, { dispatch, getState }) => {
// 	const request = { ...data };

// 	const response = await ApiService.doPut(`/recado/${id}`, request);
// 	const oldState = getState().recado;

// 	if (!response.success) {
// 		dispatch(updateResponse(response.data));
// 		return { ...data, id, loading: false };
// 	}

// 	dispatch(getOne(id));

// 	return { ...oldState, message: response.message, success: response.success };
// });

// const initialState = {
// 	success: false,
// 	message: '',
// 	errorCode: '',
// 	loading: false,
// 	description: ''
// };

// const recadoSlice = createSlice({
// 	name: 'recado',
// 	initialState,
// 	reducers: {
// 		newData: {
// 			reducer: (state, action) => action.payload,
// 			prepare: event => ({
// 				payload: {
// 					id: 'new',
// 					description: '',
// 					success: false,
// 					loading: false,
// 					message: '',
// 					errorCode: ''
// 				}
// 			})
// 		},
// 		clearState: (state, action) => initialState,
// 		updateState: (state, action) => {
// 			return { ...state, ...action.payload };
// 		},
// 		updateResponse: (state, action) => {
// 			state.success = action.payload.success;
// 			state.message = action.payload.message;
// 		},
// 		updateLoading: (state, action) => {
// 			state.loading = action.payload;
// 		}
// 	},
// 	extraReducers: {
// 		[getOne.fulfilled]: (state, action) => action.payload,
// 		[saveOne.fulfilled]: (state, action) => action.payload,
// 		[updateOne.fulfilled]: (state, action) => action.payload
// 	}
// });

// export const { newData, updateResponse, updateLoading } = recadoSlice.actions;

// export default recadoSlice.reducer;


import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ApiService from 'app/services/api/';

export const getOne = createAsyncThunk('recados/getOne', async (id, { dispatch }) => {
	const response = await ApiService.doGet(`/recados/${id}`);
	console.log(id)
	console.log("response")
	console.log(response)
	
	const  recado  =  response;
	console.log("recado")
	console.log(recado)

	return { ...recado };
});

export const saveOne = createAsyncThunk('recados/saveOne', async (data, { dispatch }) => {
	const request = { ...data };

	const response = await ApiService.doPost('/recados', request);
	if (!response.success) {
		dispatch(updateResponse(response.data));
		return data;
	}
	const { recado } = await response.data;

	dispatch(getOne(recado.id));

	return { ...data, message: response.message, success: response.success };
});

export const updateOne = createAsyncThunk(`recado/updateOne/`, async ({ data,id }, { dispatch, getState }) => {
	const request = { ...data };

	const response = await ApiService.doPut(`/recado/${id}`, request);
	const oldState = getState().recado;

	if (!response.success) {
		dispatch(updateResponse(response.data));
		return { ...data, id, loading: false };
	}

	dispatch(getOne(id));

	return { ...oldState, message: response.message, success: response.success };
});

const initialState = {
	errorCode: '',
	loading: false,
	detalhe: '',
	descricao:''
	
};

const recadoSlice = createSlice({
	name: 'recado',
	initialState,
	reducers: {
		newData: {
			reducer: (state, action) => action.payload,
			prepare: event => ({
				payload: {
					id: 'new',
					descricao: '',
					success: false,
					loading: false,
					message: '',
					errorCode: ''
				}
			})
		},
		clearState: (state, action) => initialState,
		updateState: (state, action) => {
			return { ...state, ...action.payload };
		},
		updateResponse: (state, action) => {
			state.success = action.payload.success;
			state.message = action.payload.message;
		},
		updateLoading: (state, action) => {
			state.loading = action.payload;
		}
	},
	extraReducers: {
		[getOne.fulfilled]: (state, action) => action.payload,
		[saveOne.fulfilled]: (state, action) => action.payload,
		[updateOne.fulfilled]: (state, action) => action.payload
	}
});

export const { newData, updateResponse, updateLoading } = recadoSlice.actions;

export default recadoSlice.reducer;
