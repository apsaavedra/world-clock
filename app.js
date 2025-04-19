function updateTime() {
  let montevideoElement = document.querySelector("#montevideo");

  let montevideoDateElement = montevideoElement.querySelector(".date");

  let montevideoTimeElement = montevideoElement.querySelector(".time");

  montevideoDateElement.innerHTML = moment()
    .tz("America/Montevideo")
    .format("MMMM Do YYYY");
  montevideoTimeElement.innerHTML = moment()
    .tz("America/Montevideo")
    .format("H:mm:ss");

  //

  let parisElement = document.querySelector("#paris");

  let parisDateElement = parisElement.querySelector(".date");

  let parisTimeElement = parisElement.querySelector(".time");

  parisDateElement.innerHTML = moment()
    .tz("Europe/Paris")
    .format("MMMM Do YYYY");
  parisTimeElement.innerHTML = moment().tz("Europe/Paris").format("H:mm:ss");

  //

  let newYorkElement = document.querySelector("#new-york");

  let newYorkDateElement = newYorkElement.querySelector(".date");

  let newYorkTimeElement = newYorkElement.querySelector(".time");

  newYorkDateElement.innerHTML = moment()
    .tz("America/New York")
    .format("MMMM Do YYYY");
  newYorkTimeElement.innerHTML = moment()
    .tz("America/New York")
    .format("H:mm:ss");
}

updateTime();
setInterval(updateTime, 1000);
