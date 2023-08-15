import React from 'react';
import { useSelector } from 'react-redux';
import ItemLink from '../itemLink/itemLinkComponent';
import './myLinksComponent.css'


function MyLinks(props) {

	const myLinks = useSelector(state => state.myLinks)
	

	const itemLink = myLinks.map((item, index) => <ItemLink index={index + 1} url={item.url} shortUrl={item.short_url} clicks={item.clicks}></ItemLink>)

	return <>
		<section className="my-links">
			<div className="my-links__title">Мои ссылки</div>
			<div className="my-links__items">
				{itemLink}
			</div>
		</section>
	</>
}

export default MyLinks;

/*
state {
	myLink: [
		{url: 'https://google.com', short_url: 'https://inlnk.ru/Pm5o0a'},
		{url: 'https://google.com', short_url: 'https://inlnk.ru/Pm5o0a'},
		{url: 'https://google.com', short_url: 'https://inlnk.ru/Pm5o0a'},
	],
	prototype: ffds
}
*/