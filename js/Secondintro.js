'use strict';
import Line from './Text.js';
import Photo from './Image.js';
const e = React.createElement;

export default class Left extends React.Component
{
    constructor(props){super(props);}
    render()
    {
        var line = ['The photo alongside is me',
        'Yes, this is me about a year or two ago. I was a little healthier than I am currently. But after some months of a hardcore diet of vegetables, I will be back.',
        'You know something, I love you soo much and feel extremely comfortable and happy with you. It feels great to love the person I care about knowing that she love me back.',
        'The way you laugh, the way you look in the morning, the way you doze off on the video call at times, the way you put your toothbrush in your mouth, the way you talk, the way you breathe when you sleep and most specially, the way you look at me when we have had physical eye contact - i love all of them. Your pupils dilate a little, and i feel elated and excited. I love that feeling',
        'I feel like I am the luckiest person in this world. You just make me feel soo awesome all the time in every situation of my life. Just your presence makes me do stuff that I normally would never have done. The photo of me with foam on my face an example. I am glad to be your part in your life.'
    ];
        return e(
            'div', {id:'top', className:'container transluscent color-3 marg'},
            e(
                'div', {className:'col-12 col-sm-5 vert-align'},
                e(
                    Photo,{path:'img/weird_ass_me.jpg', placeholder:'This Image', css:'imgfill pad round-1'}
                )
            ),
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
            )
        )
    }
}
