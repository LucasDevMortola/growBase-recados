// import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
// import ApiService from 'app/services/api';

// export const getAll = createAsyncThunk('recados/getRecados', async () => {
// 	const response = await ApiService.doGet('/recados');
// 	const data = await response.data;

// 	console.log(data);

// 	return data.recados;
// });

// const adapter = createEntityAdapter({
// 	selectId: recado => recado.uid
// });

// export const { selectAll} = adapter.getSelectors(state => state.recados);

// const recadosSlice = createSlice({
// 	name: 'recados',
// 	initialState: adapter.getInitialState(),
// 	reducers: {},
// 	extraReducers: {
// 		[getAll.fulfilled]: adapter.setAll
// 	}
// });

// export default recadosSlice.reducer;


import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import ApiService from 'app/services/api';

// export const getAll = createAsyncThunk('recados/getRecados', async () => {
// 	const response = await ApiService.doGet('/recados');
// 	const data = await response.data;

export const getAll = createAsyncThunk('recados/getRecados', async () => {
	const response = await ApiService.doGet('/recados');
	const data = await response;
	console.log("data");
	console.log(data);
	console.log(response);

	return data;
});
console.log("getAll")
console.log(getAll)

const adapter = createEntityAdapter({
	selectId: recado => recado.uid
});

export const { selectAll, selectById } = adapter.getSelectors(state => state.recados);

const recadosSlice = createSlice({
	name: 'recados',
	initialState: adapter.getInitialState(),
	reducers: {},
	extraReducers: {
		[getAll.fulfilled]: adapter.setAll
	}
});

export default recadosSlice.reducer;
