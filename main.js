const url = "https://api.github.com/users";
const img = document.querySelector(".user--pp__img");
const followers = document.querySelector(".followers");
const following = document.querySelector(".following");
const goProfile = document.querySelector(".go__profile");
const user = document.querySelector(".user");

// form
const inputUserName = document.querySelector(".username");
const submitBtn = document.querySelector(".submit");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const username = inputUserName.value;
  findUser(username);
});

function findUser(userName) {
  fetch(url + `/${userName}`)
    .then((data) => data.json())
    .then((res) => changeItems(res))
    .catch((error) => {
      console.error("Error:", error);
    });
}

function changeItems(data) {
  if (data.message == "Not Found") {
    user.classList.add('hide')
    document.querySelector('.message').classList.remove('hide');
    document.querySelector('.message') = "User not found";
  } else {
    document.querySelector('.message').classList.add('hide');
    user.classList.remove("hide");
    img.src = data.avatar_url;
    followers.innerText = data.followers;
    following.innerText = data.following;
    goProfile.setAttribute("href", data.html_url);
    user.classList.remove("hide");
  }
}
