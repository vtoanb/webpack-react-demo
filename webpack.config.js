// module.exports = {
//     entry: {
//         helloWorld: './js/helloworld'
//     },
//     output: {
//         filename: 'public/[name].js'
//     }
// };

// config below use hot-reload socket.io

module.exports = {
    entry: {
        helloWorld: [
            'webpack-dev-server/client?http://localhost:8080',
            './js/helloworld.js',
        ]
    },
    output: {
        filename: 'public/[name].js'
    }
};