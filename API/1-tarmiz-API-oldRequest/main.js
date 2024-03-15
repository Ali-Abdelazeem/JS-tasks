function getposts(id) {
  const request = new XMLHttpRequest();

  request.open("GET", `https://jsonplaceholder.typicode.com/posts?userId=`+id);
  request.send();
  request.responseType = "json";

  request.onload = function () {
    if (request.status >= 200 && request.status < 300) {
      console.log("Commits:", request.response);
      let posts = request.response;

      // fill html file with posts
      const divPosts = document.querySelector(".posts");
      divPosts.innerHTML = "";
      for (let post of posts) {
        const divPosts = document.querySelector(".posts");
        divPosts.innerHTML += `

      <div class="post">
          <p class="title">${post.title}</p>
          <p class="content">
            ${post.body}
          </p>
      </div>  

`;
      }
      // fill html file with posts
    } else {
      console.error("Error fetching commits:", request.statusText);
    }
  };
}
//###############
//###############


function getUsers() {

  return new Promise((resolve, reject)=>{
    const request = new XMLHttpRequest();

    request.open("GET", `https://jsonplaceholder.typicode.com/users`);
    request.send();
    request.responseType = "json";
  
    request.onload = function () {
      if (request.status >= 200 && request.status < 300) {
        console.log("Commits:", request.response);
        let users = request.response;
  
        // fill html file with posts
        const divUsers = document.querySelector(".users");
        divUsers.innerHTML = "";
        for (let user of users) {
  
          divUsers.innerHTML += `
  
          <div class="user" onclick="runPosts(${user.id})">
          <p class="name">${user.name}</p>
          <p class="email">${user.email}</p>
        </div> 
  
  `;
  resolve()
        }
        // fill html file with posts
      } else {
        console.error("Error fetching commits:", request.statusText);
      }
    };

  })
 

}


getposts(1);
getUsers()
.then(()=>   document.querySelectorAll(".user")[0].classList.add("selected")
)


function runPosts(id) {
  getposts(id)
  
  const allUsers = document.getElementsByClassName("user")

  for (let user of allUsers){
    user.addEventListener("click" ,()=>{
console.log("dddddd")
for(let el of allUsers) {
  el.classList.remove("selected")
}
user.classList.add("selected")

    })

  }

}



