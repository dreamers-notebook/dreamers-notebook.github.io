'use strict';
import Line from './Text.js';

const e = React.creatElement;
const ep = React.createElement;
export default class Playbox extends React.Component
{
    constructor(props){super(props);}
    render()
    {
        var lines = [
            'Every moment that you are with me, I feel awesome. I dont know how to describe it but I feel great. Even if we have lived a lot far most of the time we are in the relationship, I seldom felt distant from you and you were always close. You always make my life colourful - a lot more colourful than this webpage.',
            'Even in gloomy days, you liven me up and on the drowsy days, we both(mostly me) complain about how lazy we and sleepy we feel. I just love it.',
            'It will be a long time before we can actually get to live together and spend time physically close to each other. I am really looking forward to living with you and I want you to get a job in Bangalore from the bottom of my heart.',
            'To conclude, I thought it will be a good idea to compile some songs for you in a playlist. You know probably all of them. They give me similar awesome emotional feelings that you give, so I thought it would be cool to add that too.',
            'I hope you love it.'
        ];
        //<div><iframe src="https://open.spotify.com/embed/playlist/1dYLpXeDgNzfxB6SMLXeT7" width=100% height=100% frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>

        return ep(
            'div',
            {className:'container transluscent color-2 marg side'},
            ep(
                'div',
                {className:''},
                ep(
                    Line,{text:lines[0],css:'top-cap'}
                ),
                ep(
                    Line,{text:lines[1],css:'top-cap'}
                ),
                ep(
                    Line,{text:lines[2],css:'top-cap'}
                ),
                ep(
                    Line,{text:lines[3],css:'top-cap'}
                ),
                ep(
                    Line,{text:lines[4],css:'top-cap'}
                )
            ),
            ep(
                'div',{className:''},
                ep(
                    'iframe',
                    {
                        src:this.props.path,
                        className:'play',
                        frameBorder:'0',
                        allowtransparency:'true',
                        allow:'encrypted-media'
                    }
                )
            )
        );
    }
}
