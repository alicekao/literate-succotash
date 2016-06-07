module.exports={
  entry: ['./src/index.jsx'],
  module: {
    loaders: [
      {
        loader: "babel-loader",
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  output: {
    path: './compiled',
    filename: 'bundle.js'
  }
}
