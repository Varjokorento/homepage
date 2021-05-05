import React, { useEffect, useState } from 'react'
import AboutMD from '../markdown/About.md'
import PortfolioMd from '../markdown/Portfolio.md'
import DefaultMD from '../markdown/DefaultMd.md'
import Markdown from 'markdown-to-jsx';



interface mdProps {
    mdName: string
}

export function MarkdownRenderer(props:mdProps) {

    const [postMarkdown, setPostMarkdown] = useState('');
    useEffect(() => {
        renderMD(props.mdName)
    
}, []);

const renderMD = (mdName: string) => {
    if (mdName === 'About') {
        fetch(AboutMD)
        .then((response) => response.text())
        .then((text) => {
            setPostMarkdown(text);
        });
    } else if (mdName === 'Portfolio') {
        fetch(PortfolioMd)
        .then((response) => response.text())
        .then((text) => {
            setPostMarkdown(text);
        });
    } else {
        fetch(DefaultMD)
        .then((response) => response.text())
        .then((text) => {
            setPostMarkdown(text);
        });
    }
}

    return ( 
        <div className="markdownContent">       
            <Markdown>{postMarkdown}</Markdown>
        </div>
    )
}