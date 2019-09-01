const timeDOM = {
  time: document.getElementById("time")
}
var myDate = new Date;
const timeElement = {
  format: { weekday: "long", day: "numeric", month: "long", year: "numeric", hour: "numeric", minute: "numeric", second: "numeric" },
  jour: myDate.getDay(),
  date: myDate.getDate(),
  mois: myDate.getMonth(),
  annee: myDate.getFullYear(),
  heure: myDate.getHours(),
  minute: myDate.getMinutes(),
  seconde: myDate.getSeconds()
}

const timeFunction = {
  timeMain: function () {
    var newDiv =
      `<span id="jour">` + timeFormat.getDayTime() + `</span>
      <span id="date">` + timeElement.date + `</span>
      <span id="mois">` + timeFormat.getMonthTime() + `</span>
      <span id="annee">` + timeElement.annee + `</span>
      <span id="heure">` + timeFormat.getTime(timeElement.heure) + `</span>
      <span id="minute">` + timeFormat.getTime(timeElement.minute) + `</span>
      <span id="seconde">` + timeFormat.getTime(timeElement.seconde) + `</span>`;
    timeDOM.time.innerHTML = newDiv;
  },
  changeTime: function () {
    setInterval(timeFormat.getTimeChangeSeconde, 1000)
  }
}
const timeFormat = {
  getDayTime: function () {
    if (timeElement.jour == 0)
      return ("Dimanche")
    else if (timeElement.jour == 1)
      return ("Lundi")
    else if (timeElement.jour == 2)
      return ("Mardi")
    else if (timeElement.jour == 3)
      return ("Mercredi")
    else if (timeElement.jour == 4)
      return ("Jeudi")
    else if (timeElement.jour == 5)
      return ("Vendredi")
    else {
      timeElement.jour = -1;
      return ("Samedi")
    }
  },
  getMonthTime: function () {
    if (timeElement.mois == 0)
      return ("Janvier")
    else if (timeElement.mois == 1)
      return ("Fevrier")
    else if (timeElement.mois == 2)
      return ("Mars")
    else if (timeElement.mois == 3)
      return ("Avril")
    else if (timeElement.mois == 4)
      return ("Mai")
    else if (timeElement.mois == 5)
      return ("Juin")
    else if (timeElement.mois == 6)
      return ("Juillet")
    else if (timeElement.mois == 7)
      return ("Aout")
    else if (timeElement.mois == 8)
      return ("Septembre")
    else if (timeElement.mois == 9)
      return ("Octobre")
    else if (timeElement.mois == 10)
      return ("Novembre")
    else if (timeElement.mois == 11)
      return ("Decembre")
  },
  getTime: function (x) {
    if (x < 10)
      return ("0" + x)
    else
      return x
  },
  getTimeChangeSeconde: function () {
    timeFunction.timeMain();
    timeElement.seconde++;
    if (timeElement.seconde > 59) {
      timeElement.seconde = 0
      timeElement.minute++;
    }
    if (timeElement.minute > 59) {
      timeElement.minute = 0
      timeElement.heure++;
    }
    if (timeElement.heure > 23) {
      timeElement.heure = 0
      timeElement.jour++;
      timeElement.date++;
      
    }
    if (timeElement.mois == 2) {
      if (timeElement.date == 28) {
        timeElement.date == 1;
        timeElement.mois++;
      }
    } else {
      if (timeElement.mois == 4 || timeElement.mois == 6 || timeElement.mois == 9 || timeElement.mois == 11) {
        if (timeElement.date == 30) {
          timeElement.date == 1;
          timeElement.mois++;
        }
      } else {
        if (timeElement.mois == 12)
          if (timeElement.date == 31) {
            timeElement.date == 1;
            timeElement.mois++;
            timeElement.annee++;
          } else {
            if (timeElement.date == 31) {
              timeElement.date == 1;
              timeElement.mois++;
            }

          }
      }
    }
  }
}

timeFunction.timeMain();
timeFunction.changeTime();

