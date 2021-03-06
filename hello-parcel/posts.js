//commonjs
// module.exports = {
//     fetchOnePost: function () {
//         return new Promise((resolve, reject) => {
//             fetch('http://jsonplaceholder.typicode.com/posts/1')
//                 .then(res => res.json())
//                 .then(data => {
//                     resolve(data);
//                 })
//         })
//     }
// }
//es2015
export default () => {
    return new Promise((resolve, reject) => {
        fetch('http://jsonplaceholder.typicode.com/posts/1')
            .then(res => res.json())
            .then(data => {
                resolve(data);
            })
    })
}