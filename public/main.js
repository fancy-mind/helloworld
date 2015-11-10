var React = require('react');
var ReactDOM = require('react-dom');
var CommentBox = require('./CommentBox');

ReactDOM.render(
  <CommentBox url="http://localhost:8080/api/comments"/>,
  document.getElementById('content')
);
