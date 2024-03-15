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
      }
      // fill html file with posts
    } else {
      console.error("Error fetching commits:", request.statusText);
    }
  };
}


getposts(1);
getUsers()

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


// setTimeout(() => {
//   console.log('Async operation 1 completed')
//   setTimeout(() => {
//     console.log('Async operation 2 completed')
//     setTimeout(() => {
//       console.log('Async operation 3 completed')
      
//     }, 2000);
//   }, 2000);
// }, 2000);


// function asyncOperation1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('Async operation 1 completed');
//       resolve('Result from operation 1');
//     }, 1000);
//   });
// }

// function asyncOperation2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('Async operation 2 completed');
//       resolve('Result from operation 2');
//     }, 1500);
//   });
// }

// function asyncOperation3() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('Async operation 3 completed');
//       resolve('Result from operation 3');
//     }, 2000);
//   });
// }

// asyncOperation1()
//   .then(result1 => {
//     console.log(result1);
//     return asyncOperation2();
//   })
//   .then(result2 => {
//     console.log(result2);
//     return asyncOperation3();
//   })
//   .then(result3 => {
//     console.log(result3);
//     console.log('All operations completed');
//   })
//   .catch(error => {
//     console.error('An error occurred:', error);
//   });







  // Define the URL you want to fetch data from
const url2 = `https:/z/jsonplaceholder.typicode.com/users`;

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
.then(data => {
  // Do something with the data
  console.log(data);
})
.catch(error => {
  // Handle any errors that occur during the fetch
  console.error('There was a problem with the fetch operation:', error);
});





    // Define the URL you want to fetch data from
const url = `https://jsonplaceholder.typicode.com/users`;

// Make a GET request using Axios
axios.get(url)
  .then(response => {
    // Handle the successful response
    console.log(response);
    console.log(response.data);
  })
  .then((ss)=> {
    console.log(ss)
  })



  .catch(error => {
    // Handle any errors that occur during the request
    console.error('There was an error!', error);
  });



  let students = [85 , 90 , 60, 12] 

  if ( students >= 90 ) {

  }


