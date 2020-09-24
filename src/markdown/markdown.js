import React, {useState, useRef} from "react";
import ReactMarkdown from 'react-markdown/with-html';
import './style.css'

export default function MarkDown() {
    let [text, setText] = useState('# test');
    let textAreaRef = useRef(null);

    const renderText = () => {
        setText(() => textAreaRef.current.value)
    };

    return (
        <div className={'innerContainer'}>
            <textarea onChange={renderText} value={text} ref={textAreaRef}/>
            <ReactMarkdown source={text} className={'preview'}></ReactMarkdown>
        </div>
    );
}