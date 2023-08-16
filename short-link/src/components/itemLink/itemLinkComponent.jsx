import React from 'react';
import styles from './itemLinkComponent.module.scss';
import cn from 'classnames';
import cnBind from 'classnames/bind';

const cx = cnBind.bind(styles)

function ItemLink(props) {

	const item = cx({item: props.index % 2 === 1})

	return <>
		<div className={cn('even', item)}>
			<div className={styles.content}>
				<div className={styles.number}>{props.index}</div>
				<div className={styles.links}>
					<div className={styles.url}>{props.url}</div>
					<div className={styles.short_url}>{props.shortUrl}</div>
				</div>
				<div className={styles.clicks}><span className={styles.ckicks_text}>{props.clicks}</span></div>
			</div>
		</div>
	</>
}

export default ItemLink;