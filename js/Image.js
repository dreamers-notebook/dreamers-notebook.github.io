'use strict';
const rend = ReactDOM.render;
const e = React.createElement;

class Photo extends React.Component
{
    constructor(props){super(props);}
    render()
    {
        return e(
            'img',
            {
                src:this.props.path,
                className:this.props.css,
                alt:this.props.placeholder
            }
        )
    }
}   
export default Photo;