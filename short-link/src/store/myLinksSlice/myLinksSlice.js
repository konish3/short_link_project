import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
	myLinks: [
		{ url: 'https://google.com', short_url: 'https://inlnk.ru/Pm5o0a', clicks: 4 },
		{ url: 'https://google.com', short_url: 'https://inlnk.ru/Pm5o0a', clicks: 2 },
		{ url: 'https://google.com', short_url: 'https://inlnk.ru/Pm5o0a', clicks: 2 },
	],
	allLinks: [
		{ url: 'https://google.com', short_url: 'https://inlnk.ru/Pm5o0a', clicks: 4 },
		{ url: 'https://google.com', short_url: 'https://inlnk.ru/Pm5o0a', clicks: 2 },
		{ url: 'https://google.com', short_url: 'https://inlnk.ru/Pm5o0a', clicks: 2 },
		{ url: 'https://google.com', short_url: 'https://inlnk.ru/Pm5o0a', clicks: 2 },
		{ url: 'https://google.com', short_url: 'https://inlnk.ru/Pm5o0a', clicks: 2 },
		{ url: 'https://google.com', short_url: 'https://inlnk.ru/Pm5o0a', clicks: 2 },
		{ url: 'https://google.com', short_url: 'https://inlnk.ru/Pm5o0a', clicks: 2 },
		{ url: 'https://google.com', short_url: 'https://inlnk.ru/Pm5o0a', clicks: 2 },
		{ url: 'https://google.com', short_url: 'https://inlnk.ru/Pm5o0a', clicks: 2 },
		{ url: 'https://google.com', short_url: 'https://inlnk.ru/Pm5o0a', clicks: 2 },
	],
	pagination: []
}

const myLinkSlice = createSlice({
	name: 'myLinks',
	initialState: initialState.myLinks,
	reducers: {
		// addLink: (state, action) => {
			
		// }
	}
})

export const { addLink, reducer } = myLinkSlice;
