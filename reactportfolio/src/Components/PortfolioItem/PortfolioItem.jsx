import React from 'react';

function PortfolioItem ({id, imageSrc, summary, text, url, urlG, urlH, iconH, iconG}) {
        return (
            <div key={id} id={id} className="portCard col-md-5 mb-2 mx-auto rounded">
                <h3 className="projectText text-white">{text}</h3>
                <img src={imageSrc} alt={id} className="portImages"></img>
                <p className="summaryText text-white center">{summary}</p>
                <a href={urlG} target="__blank"><img src={iconG} alt={id} className="icon" data-toggle="tooltip" data-placement="top" title="GitHub Link"></img></a><a href={url} target="__blank"><img src={iconH} alt={id} className="icon" data-toggle="tooltip" data-placement="top" title="Heroku Link"></img></a>
            </div>
        )
    };

export default PortfolioItem;

{/* <a href="https://github.com/JShields30" target="__blank"className="github">
    <i className="fab fa-github" data-toggle="tooltip" data-placement="top" 
    title="GitHub Link"></i></a> */}