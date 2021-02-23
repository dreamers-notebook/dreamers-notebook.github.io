'use strict';
import Line from './Text.js';
import Photo from './Image.js';
const e = React.createElement;
export default class Right extends React.Component
{
    constructor(props){super(props);}
    render()
    {
        var line = ['Hi, Boo!!',
        'This is a tiny little gift from me to you for absolutely no reason at all.',
        'No! There is a reason: On this day, we will have completed 814 days of being with each other. On the other hand, there is no concrete reason for choosing the ' + this.props.day + 'th day for building this website, which is neither a multiple of 100, nor can it be represented as an integral number of years',
        'I felt that while being with a person as special and awesome as you are, it does not even matter if the number of days is odd. You make every day sunny and worth celebrating.',
        'Today, I just thought of giving it a shot in building this up. I loved every second of this attempt in creating a little website that you would love to look at. All actions on this is webpage intended to convey how much I love you and how much I want to spend as much time as I can with you. You are an important part of my life whom I cannot do without.'];
        return e(
            'div', {id:'top', className:'container transluscent color-4 marg'},
            e(
                'div',
                {className:'col-12 col-sm-7',id:'top-text'},
                e(
                    Line,{text:line[0],id:'top-head'}
                ),
                e(
                    Line,{text:line[1],css:'top-cap'}
                ),
                e(
                    Line,{text:line[2],css:'top-cap'}
                ),
                e(
                    Line,{text:line[3],css:'top-cap'}
                ),
                e(
                    Line,{text:line[4],css:'top-cap'}
                )
            ),
            e(
                'div', {className:'col-12 col-sm-5 vert-align'},
                e(
                    Photo,{path:'img/ultadanga_us.jpg', placeholder:'This Image', css:'imgfill pad round-1'}
                )
            )
        )
    }
}
