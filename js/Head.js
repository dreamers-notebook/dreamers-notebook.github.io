'use strict';
import Line from './Text.js';
const e = React.createElement;

export default class Head extends React.Component
{
    constructor(props){super(props);}
    render()
    {
        return e(
            'div',{className:'container transluscent color-1 topmarg center'},
            e(Line,{text:'HAPPY ' + this.props.day + '-th DAILY-VERSARY!!',css:'happy'}),
            e(Line, {text:'',css:'small-underline'}),
            e(Line,{text:'Congratulations on our ' + this.props.day + '-th day together',css:'happy-lower'})
        )
    }
}