import React from 'react';
import './itemLinkComponent.css'

function ItemLink(props) {
	return <>
		<div className="item">
			<div className="item__content">
				<div className="item__number">{props.index}</div>
				<div className="item__links">
					<div className='item__url'>{props.url}</div>
					<div className='item__short-url'>{props.shortUrl}</div>
				</div>
				<div className="item__clicks"><span className='item__ckicks_text'>{props.clicks}</span></div>
			</div>
		</div>
	</>
}

export default ItemLink;