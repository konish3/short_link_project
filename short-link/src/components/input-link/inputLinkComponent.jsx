import React, {useState} from 'react';
import Input from './inputBlock/input';
import Button from './buttonBlock/button';
import './inputLinkComponent.css';

function InputLink(props) {

	const [url, setUrl] = useState('')
	const [status, setStatus] = useState('typing')
	const [error, setError] = useState(null)
	console.log(url)

	
	function handleInputChange(e) {
		setUrl(e.target.value);
	}

	return <>
		<div className="block">
			<div className="block__content">
				<div className='block__content_text'>Введите ссылку</div>
				{/* <form onSubmit={}> */}
					<Input url={url} handleInputChange={handleInputChange}></Input>
					<Button></Button>
				{/* </form> */}
				<div className='block__content_error'>{error}</div>
			</div>
		</div>
	</>
}

export default InputLink;

// const urlPattern = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
// if (typeof url !== 'string') {
// 	setError('Введенные данные не являются строкой!')
// } else if (url.length > 2048) {
// 	setError('Длина введенных данных слишком большая!')
// } else if (urlPattern.test(url)) {
// 	setError('Введенные данные не являются ссылкой')
// }