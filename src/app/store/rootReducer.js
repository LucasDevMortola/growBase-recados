import { combineReducers } from '@reduxjs/toolkit';
import auth from 'app/auth/store';
import recado from 'app/main/recados/store/recadoSlice'
import category from 'app/main/categories/store/categorySlice';
import categories from 'app/main/categories/store/categoriesSlice';
import recados from 'app/main/recados/store/recadosSlice'

import fuse from './fuse';
import i18n from './i18nSlice';

const createReducer = asyncReducers => (state, action) => {
	const combinedReducer = combineReducers({
		auth,
		fuse,
		i18n,
		recado,
		categories,
		recados,
		category,
		...asyncReducers
	});

	/*
	Reset the redux store when user logged out
	 */
	if (action.type === 'auth/user/userLoggedOut') {
		state = undefined;
	}

	return combinedReducer(state, action);
};

export default createReducer;
