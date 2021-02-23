'use strict';
//import Line from './Text.js';
//import Photo from './Image.js';
import Right from './Topintro.js';
import Head from './Head.js';
import Left from './Secondintro.js';
import Playbox from './Player.js';
const rend = ReactDOM.render;
const e = React.createElement;
var dy = 815;
var spotify_url="https://open.spotify.com/embed/playlist/6jGQE58z8GVrwsxlFjG7vk";
const elem = e('div',{className:''},
    e(
        Head,{day:dy}
    ),
    e(
        Right,{day:dy}
    ),
    e(
        Left,{day:dy}
    ),
    e(
        Playbox,{path:spotify_url}
    )
);

rend(elem,
    document.getElementById('page')
);
