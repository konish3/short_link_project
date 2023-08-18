import { createSlice } from '@reduxjs/toolkit'


const initialState = {
	myLinks: [],
	allLinks: [],
	pagination: []
}

export const shortLinksReducer = createSlice({
	name: 'shortLinks',
	initialState,
	reducers: {
		setMyLinks: (state, action) => {
			const item = { url: action.payload, short_url: 'https://inlnk.ru/Pm5o0a', clicks: 0 }
			state.myLinks.unshift(item)
			state.allLinks.unshift(item)
			return state
		},
		setAllLinks: (state, action) => {
			state.allLinks.push(...action.payload.short_urls.data)
			return state
		},
		setClicks: (state, action) => {
			state.allLinks[action.payload - 1].clicks++
			return state
		},
		setPagination: (state, action) => {
			console.log(state, action)
			return state
		}
	}
})

export const { setMyLinks, setAllLinks, setClicks, setPagination } = shortLinksReducer.actions
export default shortLinksReducer.reducer