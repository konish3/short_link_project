import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../myLinksSlice/myLinksSlice';

const allLinks = createSlice({
	name: 'allLinks',
	initialState: initialState.allLinks,
	reducers: {
		
	}
})

export const { action, reducer} = allLinks