import React from 'react';

function PortfolioItem ({id, imageSrc, summary, text, url}) {
        return (
            <div key={id} id={id} className="portCard col-md-7 mb-4 mx-auto rounded">
                <a href={url} target="__blank"><img src={imageSrc} alt={id} className="portImages"></img></a>
                <p className="summaryText text-white center">{summary}</p>
                <h3 className="projectText text-white">{text}</h3>
            </div>
        )
    };

export default PortfolioItem;

