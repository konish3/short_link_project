import React from 'react';
import styles from './pagination.module.scss'

function Pagination (props) {
	return <>
		<article className={styles.pagination}>
			<div className={styles.content}>
				<button className={styles.button}></button>
			</div>
		</article>
	</>
}

export default Pagination;