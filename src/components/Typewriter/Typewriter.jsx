import React, { useEffect, useState } from 'react';

const Typewriter = ({ text, delay }) => {
	const [currentText, setCurrentText] = useState('');
	const [currentIndex, setCurrentIndex] = useState(0);
	
	useEffect(() => {
		if (currentIndex < text.length) {
			const timeout = setTimeout(() => {
				setCurrentText(prevText => prevText + text[currentIndex]);
				setCurrentIndex(prevIndex => prevIndex + 1);
			}, delay);
			
			return () => clearTimeout(timeout);
		}
	}, [currentIndex, text, delay]);
	
	return (
		<div>
			{currentText}
		</div>
	);
};

export default Typewriter;
