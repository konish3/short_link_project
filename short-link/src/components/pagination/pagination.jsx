import React from 'react';
import styles from './pagination.module.scss'

function PageNumber (props) {
	return <>
		<article className={styles.pagination}>
			<div className={styles.content}>
				<button className={styles.button}></button>
			</div>
		</article>
	</>
}

export default PageNumber;