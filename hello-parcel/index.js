//commonjs
//const posts = require('./posts');

// posts.fetchOnePost()
//     .then(post => {
//         document.getElementById('title').innerHTML = post.title;
//         document.getElementById('body').innerHTML = post.body;
//     })

//es2015
import fetchOnePost from './posts';
import $ from 'jquery';

fetchOnePost()
    .then(post => {
        $('#title').html(post.title);
        $('#body').html(post.body);
    }) 