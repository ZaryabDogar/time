setInterval(() => {
    function addZero(i) {
        if (i < 10) {i = "0" + i}
        return i;
    }
    
    let a = new Date();
    let h = addZero(a.getHours());
    document.getElementById("zone").innerHTML =
    h >= 12 ? "<p>PM<p/>" : "<p>AM<p/>";
    let m = addZero(a.getMinutes());
    let s = addZero(a.getSeconds());
    let d = addZero(a.getUTCDate());
    let mo = a.getUTCMonth();
    let y = a.getUTCFullYear();
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
   let month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let day_name = days[a.getDay()];
    h = h % 12;
    h = h ? h : 12;




    let hourEl = document.getElementById("hour");
    hourEl.innerText = h;
    let mintEl = document.getElementById("mint");
    mintEl.innerText = m;
    let secEl = document.getElementById("sec");
    secEl.innerText = s;
    
    let DateEl = document.getElementById("date");
    DateEl.innerText = d;
    let monthEl = document.getElementById("month");
    monthEl.innerText = month[mo];
    let yearEl = document.getElementById("year");
    yearEl.innerText = y;
    let dayEl = document.getElementById("day");
    dayEl.innerText = day_name;
}, 1000);
