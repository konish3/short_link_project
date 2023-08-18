import React from 'react';
import './button.css'

export function Button ({url, text, onClick, error}) {
	return <>
		<button onClick={onClick} disabled={!url.length || error.length}>
			{text}
		</button>
	</>
}

