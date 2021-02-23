'use strict';

const rend = ReactDOM.render;
const e = React.createElement;

export default class Line extends React.Component
{
    constructor(props){super(props);}
    render()
    {
        return e('p',{className:this.props.css, id:this.props.id},this.props.text);
    }
}