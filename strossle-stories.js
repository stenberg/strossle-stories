document.addEventListener('DOMContentLoaded', function() {

  var posts = document.getElementsByClassName("strossle-post");

  var openStory = function(e) {
    e.preventDefault();
    console.log("Click");
  };

  for (var i = 0; i < posts.length; i++) {
    posts[i].addEventListener('click', openStory, false);
  }
});
