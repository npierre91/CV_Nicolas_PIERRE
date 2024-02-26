import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react';

const TypeWriter = ({ delay, text }) => {
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
    }, [currentIndex, delay, text]);

    return <span style={{ color: 'white' }}>{currentText}</span>;
};

TypeWriter.propTypes = {
    delay: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
}

export default TypeWriter;