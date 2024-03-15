

function getposts(id) {


  axios.get(`https://jsonplaceholder.typicode.com/posts?userId=`+id)
  .then(function (response) {
 let posts = response.data

 const divPosts = document.querySelector(".posts");
 divPosts.innerHTML = "";
 for (let post of posts) {
   divPosts.innerHTML += `
   <div class="post">
       <p class="title">${post.title}</p>
       <p class="content">
         ${post.body}
       </p>
   </div>  
`;
 }
  })
.catch(error => {
    // Handle any errors that occur during the fetch
    console.error('There was a problem with the axios operation:', error);
  });

}



function getUsers() {

  return new Promise((resolve , reject)=> {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(function (response) {
   let users = response.data
  
    
   const divUsers = document.querySelector(".users");
   divUsers.innerHTML = "";
   for (let user of users) {

     divUsers.innerHTML += `

     <div class="user" onclick="runPosts(${user.id})">
     <p class="name">${user.name}</p>
     <p class="email">${user.email}</p>
   </div> 

`;
   }
   resolve()
    })
  .catch(error => {
      // Handle any errors that occur during the fetch
      console.error('There was a problem with the axios operation:', error);
      reject("there is a problem mybe in the url")
    });

  })
}


getUsers().then(()=> {
  getposts(1)
  document.querySelectorAll(".user")[0].classList.add("selected")
}).catch((error) => console.log("==============>>>>>>"+error))

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





console.log("end")


