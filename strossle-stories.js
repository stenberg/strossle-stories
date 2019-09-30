document.addEventListener('DOMContentLoaded', function() {

  var posts = document.getElementsByClassName("strossle-post");

  var openStory = function() {
    alert("Click");
  };

  for (var i = 0; i < posts.length; i++) {
    posts[i].addEventListener('click', openStory, false);
  }
});
