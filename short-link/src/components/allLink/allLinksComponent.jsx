import React, { useState } from 'react';
import './allLinksComponent.css'
import { useSelector } from 'react-redux';
import ItemLink from '../itemLink/itemLinkComponent';
import PageNumber from '../pagination/pagination';

function AllLink(props) {
	const allLinks = useSelector(state => state.allLinks)
	const [links, setLinks] = useState(null)
	

	const itemLink = allLinks.map((item, index) => <ItemLink key={index + 1} index={index + 1} url={item.url} shortUrl={item.short_url} clicks={item.clicks}></ItemLink>)


	return <>
		<section className="all-links">
			<div className="all-links__title">Список ссылок</div>
			<div className="all-links__items">
				{itemLink}
			</div>
		</section>
		<PageNumber></PageNumber>
	</>
}

export default AllLink;