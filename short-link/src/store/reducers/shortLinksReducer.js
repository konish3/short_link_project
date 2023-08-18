import { createSlice } from '@reduxjs/toolkit'


const initialState = {
	myLinks: [
		{ url: 'https://google.comasdasdasdasdasdasdasasdasdasd', short_url: 'https://inlnk.ru/Pm5o0aasdasdasdasdasdasdasdasdasasdasdasdasdasdasdasd', clicks: 5 },
		{ url: 'https://google.com', short_url: 'https://inlnk.ru/Pm5o0a', clicks: 5 },
		{ url: 'https://google.comasdasdasdasdasdasd', short_url: 'https://inlnk.ru/Pm5o0a', clicks: 5 },
	],
	allLinks: [
		
	],
	pagination: []
}

export const shortLinksReducer = createSlice({
	name: 'shortLinks',
	initialState,
	reducers: {
		setMyLinks: (state, action) => {
			console.log(state, action)
			return state
		},
		setAllLinks: (state, action) => {
			state.allLinks.push(...action.payload.short_urls.data)
			return state
		},
		setPagination: (state, action) => {
			console.log(state, action)
			return state
		}
	}
})

export const { setMyLinks, setAllLinks, setPagination } = shortLinksReducer.actions
export default shortLinksReducer.reducer