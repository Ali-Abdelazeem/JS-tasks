// list of optional selectable cities
let cities = [
  {
    arabicName: "القاهرة",
    englishName: "Cairo",
  },
  {
    arabicName: "الشرقية",
    englishName: "Ash Sharqīyah",
  },
  {
    arabicName: "الاسكندرية",
    englishName: "Alexandria",
  },
  {
    arabicName: "الأقصر",
    englishName: "Luxor",
  },
];

// filling select tag with values from previous cities array list
document.getElementById("selectCity").innerHTML = "";
for (let city of cities) {
  document.getElementById(
    "selectCity"
  ).innerHTML += `<option value="${city.arabicName}">${city.arabicName}</option>`;
}

getTimePrayes("Cairo");
// Update prayer times
document.getElementById("selectCity").addEventListener("change", () => {
  console.log(document.getElementById("selectCity").value);
  let valueOfselect = document.getElementById("selectCity").value;
  for (let city of cities) {
    if (city.arabicName == valueOfselect) {
      engName = city.englishName;
      console.log(engName)
    }
  }
  getTimePrayes(engName);

  //=====> update city

  document.getElementById("city").innerHTML = valueOfselect;
});

function getTimePrayes(engName) {
  let endpoint = `http://api.aladhan.com/v1/timingsByCity`;
  params = {
    city: engName,
    country: "EG",
  };

  axios
    .get(endpoint, {
      params: params,
    })
    .then((response) => {
      console.log(response);
      const timing = response.data.data.timings;
      console.log(timing);

      //======> set praying time
      document.getElementById("fajr").innerHTML = timing.Fajr;
      document.getElementById("shoroq").innerHTML = timing.Sunrise;
      document.getElementById("duhr").innerHTML = timing.Dhuhr;
      document.getElementById("asr").innerHTML = timing.Asr;
      document.getElementById("maghrep").innerHTML = timing.Maghrib;
      document.getElementById("ashaa").innerHTML = timing.Isha;

      //======> update date in title
      const date = response.data.data.date;
      console.log(date);
      document.getElementById("day").innerHTML = date.hijri.weekday.ar;
      document.getElementById("date").innerHTML = date.readable;
    })
    .catch(function (error) {
      console.log(error);
    });
}

// watch






setInterval(watchTime, 1000);

function watchTime(){
       
let dateNow = new Date();
let hours = dateNow.getHours();
if (hours >= 12) {
  hours -= 12
}
let minutes = dateNow.getMinutes();
let seconds = dateNow.getSeconds();
let dayofweek = dateNow.getDay();
    document.getElementById("numbers").innerHTML = `${seconds}: ${minutes}: ${hours}`

    switch (dayofweek) {
        case 0:
          dayofweek = "الأحد";
          break;
      
        case 1:
          dayofweek = "الأثنين";
          break;
      
        case 2:
          dayofweek = "الثلاثاء";
          break;
      
        case 3:
          dayofweek = "الأربعاء";
          break;
      
        case 4:
          dayofweek = "الخميس";
          break;
      
        case 5:
          dayofweek = "الجمعة";
          break;
      
        case 6:
          dayofweek = "السبت";
          break;
      
        default:
          break;
      }
      

    document.getElementById("dayweek").innerHTML = `${dayofweek}`
}