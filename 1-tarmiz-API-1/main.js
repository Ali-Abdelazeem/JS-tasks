

function getposts(id) {



// Define the URL you want to fetch data from
const url2 =  `https://jsonplaceholder.typicode.com/posts?userId=`+id;

// Make a fetch request to the URL
fetch(url2)
.then(response => {
  // Check if the response is successful
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  // Parse the JSON from the response
  
  return response.json();
})
.then(posts => {


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

}


)
.catch(error => {
  // Handle any errors that occur during the fetch
  console.error('There was a problem with the fetch operation:', error);
});

}


  



function getUsers() {

  return new Promise((resolve , reject)=> {

    // Define the URL you want to fetch data from
    const url2 =  `https://jsonplaceholder.typicode.com/users`;
    
    // Make a fetch request to the URL
    fetch(url2)
    .then(response => {
      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Parse the JSON from the response
      return response.json();
    })
    .then(users => {
    
    
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
      console.error('There was a problem with the fetch operation:', error);
    });
    
    }
    
  
    )
  }

;
getUsers().then(()=> {
  getposts(1)
})

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








