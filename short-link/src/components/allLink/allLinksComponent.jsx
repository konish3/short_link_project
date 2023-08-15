import React from 'react';
import './allLinksComponent.css'
import { useSelector } from 'react-redux';
import ItemLink from '../itemLink/itemLinkComponent';

function AllLink(props) {
	const allLinks = useSelector(state => state.allLinks)
	console.log(allLinks)

	const itemLink = allLinks.map((item, index) => <ItemLink index={index + 1} url={item.url} shortUrl={item.short_url} clicks={item.clicks}></ItemLink>)


	return <>
		<section className="all-links">
			<div className="all-links__title">Список ссылок</div>
			<div className="all-links__items">
				{itemLink}
			</div>
		</section>
	</>
}

export default AllLink;