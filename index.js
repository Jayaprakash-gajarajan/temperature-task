var container = document.createElement("div");
container.setAttribute("class", "container");
var row = document.createElement("div");
row.setAttribute("class", "row");
row.classList.add("row", "m-3");
container.append(row);

var res = fetch("https://restcountries.com/v2/all");
res.then((data) => data.json()).then((data1) => foo(data1));
//console.log(foo(data1));

function foo(data1) {
    console.log(data1);
    for (var i = 0; i < 50; i++) {
        row.innerHTML += `<div class="col-md-4">
 <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
  <nav class="navbar navbar-light bg-blue">
         <h3>${data1[i].name}</h3>
        </nav>
  <img src="${data1[i].flag}" class="card-img-top" alt="...">
  <div class="card-body">
  <h5 class="card-title">Country:${data1[i].name}</h5>
  <h5 class="card-title">Region:${data1[i].region}</h5>
  <h5 class="card-title">Country code:${data1[i].alpha3Code}</h5>
  <button onclick="opendata(${data1[i].name},${data1[i].latlng[0]},${data1[i].latlng[1]}) "id="btn${i} ">Click For Weather</button>
  </div >
</div >
  
   </div > `;
    }
}
//console.log(foo(data1));
document.body.append(container)
async function restdata() {
    let res = await fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
    let res1 = await res.json();
    try {
        for (var i = 0; i < 50; i++) {
            var name = res1[i].name;
            var latlong = res1[i].latlng;

            if (latlong.length === undefined) {
                throw new Error("invalid coordinates");
            }
            // opendata(name, ...latlong);

        }
    } catch (error) {
        console.log("invalid" + error.message);
    }
}
async function opendata(name, lat, lon) {
    try {
        console.log(name, lat, lon);
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4d0c5e02e26d67cda9a04a32524e9b2c`);
        let res1 = await res.json();

        // for (let k = 0; k < 50; k++) {
        //     let t = document.getElementById(`btn${k}`);
        //     btn1.addEventListener("click", function () {
        //         t.innerHTML = `temp${res1.main.temp}`;
        //     });
        // }

        //console.log(res1)
        //console.log(`Country name:${name} , Temp:${res1.main.temp}`);

    }
    catch (error) {
        console.log(error.message);
    }

}

restdata();



