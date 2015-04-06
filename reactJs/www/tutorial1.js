var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        More box
      </div>
    );
  }
});
React.render(
  <CommentBox />,
  document.getElementById('content')
);