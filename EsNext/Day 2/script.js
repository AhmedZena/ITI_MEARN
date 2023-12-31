let users = [];

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    users = data;
    console.log(users);
    displayUsers();
  });

let parent = document.createElement("div");
parent.className = "parent";
document.body.appendChild(parent);

function displayUsers() {
  parent.innerHTML = "";

  users.forEach((user) => {
    let userDiv = document.createElement("div");
    userDiv.className = "user";
    userDiv.innerHTML = user.name;

    userDiv.addEventListener("click", () => {
      displayPosts(user.id);

      let activeUser = document.querySelector(".active");
      if (activeUser) {
        activeUser.classList.remove("active");
      }
      userDiv.classList.add("active");
    });
    // add class active to the first user
    if (user.id === 1) {
      userDiv.classList.add("active");
      displayPosts(user.id);
    }

    parent.appendChild(userDiv);
  });
}

async function displayPosts(userId) {
  let response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  let posts = await response.json();
  console.log(userId, posts);
  displayPostsTitles(posts);
}

let postsDiv = document.createElement("div");
postsDiv.className = "posts";
document.body.appendChild(postsDiv);

function displayPostsTitles(posts) {
  postsDiv.innerHTML = "";

  posts.forEach((post) => {
    let postDiv = document.createElement("div");
    postDiv.className = "post";
    postDiv.innerHTML = post.title;
    postsDiv.appendChild(postDiv);
  });
}

// styles css
/*
body {
  background-color: #f5f5f5;
  font-family: Arial, Helvetica, sans-serif;
}

.parent {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 20px;
    }

.user {
    padding: 10px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    cursor: pointer;
    }

.posts {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 20px;
    }

.post {
    padding: 10px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    cursor: pointer;
    }

*/

/*
Make a set that holds student names. make it to get from form inputs
a. Try to add repeated names, will the set accept it?
b. Print the set values using spread operator and using for…of.
*/

let students = new Set();

let form = document.cre;
