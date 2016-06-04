module.exports={
  entry: ['./src/components/App.jsx'],
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
