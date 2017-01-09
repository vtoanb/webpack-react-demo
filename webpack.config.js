// module.exports = {
//     entry: {
//         helloWorld: './js/helloworld'
//     },
//     output: {
//         filename: 'public/[name].js'
//     }
// };

// config below use hot-reload socket.io

// module.exports = {
//     entry: {
//         helloWorld: [
//             'webpack-dev-server/client?http://localhost:8080',
//             './js/helloworld.js',
//         ]
//     },
//     output: {
//         filename: 'public/[name].js'
//     }
// };


function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://localhost:8080');
    }

    return sources;
}

module.exports = {
    entry: {
        helloWorld: getEntrySources([
            './js/helloworld.js'
        ])
    },
    output: {
        filename: 'public/[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'jsx', 'babel'], // <-- changed line
                exclude: /node_modules/
            }
        ]
    }
};
