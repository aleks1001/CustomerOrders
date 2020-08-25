import React from 'react'
import Handlebars from "handlebars"

const template = (source) => Handlebars.compile(source);

export default ({data, content}) => {
    const render = () => <div
        className="container"
        dangerouslySetInnerHTML={{__html: template(content)(data)}}
    />
    return (render())
}