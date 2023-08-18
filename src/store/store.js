import { configureStore } from '@reduxjs/toolkit';
import shortLinksReducer from './reducers/shortLinksReducer'

export const store = configureStore({
	reducer: {
		shortLinks: shortLinksReducer,
	}
})
