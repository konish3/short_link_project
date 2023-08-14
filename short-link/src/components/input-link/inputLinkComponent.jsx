import React from 'react';
import Input from './inputBlock/input';
import Button from './buttonBlock/button';
import './inputLinkComponent.css';

function InputLink(props) {
	return <>
		<div className="block">
			<div className="block__content">
				<div className='block__content_text'>Введите ссылку</div>
				<Input></Input>
				<Button></Button>
				<div className='block__content_error'>ОШИБКА</div>
			</div>
		</div>
	</>
}

export default InputLink;