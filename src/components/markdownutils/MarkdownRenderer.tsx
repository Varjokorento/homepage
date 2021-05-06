import React, { useEffect, useState } from 'react'
import Markdown from 'markdown-to-jsx';
import { getFile } from './MarkdownFiles';



interface mdProps {
    mdName: string
}

export function MarkdownRenderer(props:mdProps) {
    const [postMarkdown, setPostMarkdown] = useState('');
    useEffect(() => {
        renderMD(props.mdName)
    
}, []);

const renderMD = (mdName: string) => {
    fetch(getFile(mdName))
    .then((response) => response.text())
    .then((text) => {
        setPostMarkdown(text);
    });
}

    return ( 
        <div className="markdownContent">       
            <Markdown>{postMarkdown}</Markdown>
        </div>
    )
}