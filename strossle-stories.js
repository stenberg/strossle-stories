window.addEventListener('DOMContentLoaded', function() {

  var posts = window.getElementsByClassName("strossle-post");

  var openStory = function(e) {
    e.preventDefault();
    console.log("Click");
  };

  for (var i = 0; i < posts.length; i++) {
    posts[i].getElementsByTagName('a')[0].addEventListener('click', openStory, false);
  }
});
