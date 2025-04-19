function updateTime() {
  let montevideoElement = document.querySelector("#montevideo");

  if (montevideoElement) {
    let montevideoDateElement = montevideoElement.querySelector(".date");

    let montevideoTimeElement = montevideoElement.querySelector(".time");

    montevideoDateElement.innerHTML = moment()
      .tz("America/Montevideo")
      .format("MMMM Do YYYY");
    montevideoTimeElement.innerHTML = moment()
      .tz("America/Montevideo")
      .format("HH:mm:ss");
  }
  //

  let parisElement = document.querySelector("#paris");

  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");

    let parisTimeElement = parisElement.querySelector(".time");

    parisDateElement.innerHTML = moment()
      .tz("Europe/Paris")
      .format("MMMM Do YYYY");
    parisTimeElement.innerHTML = moment().tz("Europe/Paris").format("HH:mm:ss");
  }
  //

  let newYorkElement = document.querySelector("#new-york");

  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");

    let newYorkTimeElement = newYorkElement.querySelector(".time");

    newYorkDateElement.innerHTML = moment()
      .tz("America/New_York")
      .format("MMMM Do YYYY");
    newYorkTimeElement.innerHTML = moment()
      .tz("America/New_York")
      .format("HH:mm:ss");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;

  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
     <div class="city" >
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("HH:mm:ss")}</div>
        </div>
        <a href="index.html" class="back">All cities</a>`;

  setInterval(1000);
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
