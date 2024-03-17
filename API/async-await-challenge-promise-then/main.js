// function getrequest1(){
//   fetch(`http://api.aladhan.com/v1/timingsByCity?city=Ash Sharqīyah&country=EG&=`)
//   .then((resolve)=> resolve.json())
//   .then(json=>{
//     console.log(" done")
//     console.log(json)
//   })
// }
// console.log("befor execute function")
// getrequest1()
// console.log("after execute function")

// async function getrequest2(){
//   fetch(`http://api.aladhan.com/v1/timingsByCity?city=Ash Sharqīyah&country=EG&=`)
//   .then((resolve)=> resolve.json())
//   .then(json=> console.log(json))
// }
// console.log("befor execute function2")
// getrequest2()
// console.log("after execute function2")

// async function getrequest2(){
//  let resolve = await fetch(`http://api.aladhan.com/v1/timingsByCity?city=Ash Sharqīyah&country=EG&=`)
//  let json = await resolve.json()
//  console.log(json)
// }
// console.log("befor execute function2")
// getrequest2()
// console.log("after execute function2")

//  function getrequest2(){
//   let resolve =  fetch(`http://api.aladhan.com/v1/timingsByCity?city=Ash Sharqīyah&country=EG&=`)
//   let json =  resolve.json()
//   console.log(json)
//  }
//  console.log("befor execute function2")
//  getrequest2()
//  console.log("after execute function2")


//#########################
//#########################
//#########################
//#########################
//#########################

//  setTimeout(() => {
//   document.getElementById("title1").style.visibility = "visible"
//   setTimeout(() => {
//     document.getElementById("title2").style.visibility = "visible"
//     setTimeout(() => {
//     document.getElementById("title3").style.visibility = "visible"   //this code is too hard to modifay any time value
//       setTimeout(() => {
//     document.getElementById("title4").style.visibility = "visible"
//       }, 1000);
//     }, 1000);
//   }, 1000);
//  }, 1000);

//===========
//  turnining the previus code to promise code
//===========

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     document.getElementById("title1").style.visibility = "visible";
//     resolve();
//   }, 1000);
// })
//   .then(() => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         document.getElementById("title2").style.visibility = "visible";
//         resolve();
//       }, 1000);
//     });
//   })
//   .then(() => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         document.getElementById("title3").style.visibility = "visible";
//         resolve();
//       }, 1000);
//     });
//   })
//   .then(() => {
//     setTimeout(() => {
//       document.getElementById("title4").style.visibility = "visible";
//     }, 1000);
//   });


//============
//  turnining the previus code to async await code
//============

async function showTitles() {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      document.getElementById("title1").style.visibility = "visible";
      resolve();
    }, 1000);
  });

  await new Promise((resolve, reject) => {
    setTimeout(() => {
      document.getElementById("title2").style.visibility = "visible";
      resolve();
    }, 1000);
  });
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      document.getElementById("title3").style.visibility = "visible";
      resolve();
    }, 1000);
  });

  setTimeout(() => {
    document.getElementById("title4").style.visibility = "visible";
  }, 1000);
}

showTitles();
