console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

const newPost = document.createElement("article");
newPost.classList.add("post");

const postContent = document.createElement("p");
postContent.classList.add("post__content");
postContent.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

const postFooter = document.createElement("footer");
postFooter.classList.add("post__footer");

const postUsername = document.createElement("span");
postUsername.classList.add("post__username");
postUsername.textContent = "@second_username";

const newlikeButton = document.createElement("button");
newlikeButton.type = "button";
newlikeButton.classList.add("post__button");
newlikeButton.dataset.js = "like-button";
newlikeButton.textContent = " ♥ Like";

newlikeButton.addEventListener("click", handleLikeButtonClick);

postFooter.appendChild(postUsername);
postFooter.appendChild(newlikeButton);
newPost.appendChild(postContent);
newPost.appendChild(postFooter);

document.body.appendChild(newPost);
