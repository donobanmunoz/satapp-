const path = require('path');
//connect to the front end to complie with server and back end
module.exports = {
 entry: [
   './public/react/index.jsx'
 ],
 //am going to bundle to the front end and send to be complied
 output: {
   filename: 'bundle.js',
   path: path.join(__dirname, 'public/src')
 },
 module: {
   rules: [
     {
       //what are you working with and what tech are u using (test,use,exclude)
       test: /\.jsx?$/,
       use: [
         'babel-loader'
       ],
       exclude: /node_modules|packages/,
     },
     {
       test: /\.css$/,
       use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
     }
   ],
 },
 resolve: {
   extensions: ['.js', '.jsx']
 }
};
