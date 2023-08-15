import { configureStore } from '@reduxjs/toolkit';
import { reducer as myLinksReducer } from './myLinksSlice/myLinksSlice';
import { reducer as allLinksReducer } from './allLinksSlice/allLinksSlice';

export const store = configureStore({
	reducer: {
		myLinks: myLinksReducer,
		allLinks: allLinksReducer,
	}
})
