async function weather(c){
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${c}&appid=baa51b6b4f9915a7834693006b23962c&units=metric`;
    let res = await fetch(url);
    console.log(res);

    let data = await res.json();
    console.log(data);
    if(data.cod=="404"){
        window.alert("Enter a Valid city name");
        document.querySelector('#search>input').value="";
        main.style.display="none";
    }
    else{
        desc.innerHTML = data.weather[0].main;
        temp.innerHTML = Math.round(data.main.temp)+"°C";
        city.innerHTML = data.name;
        wind.innerHTML = data.wind.speed+"km/h";
        humidity.innerHTML = data.main.humidity+" %";
        main.style.display="block";
    }
    let whtr = data.weather[0].main;  // weather condition like Haze, Clear, Rain etc.
    console.log(whtr);
    whtr = whtr.toLowerCase();
    console.log(whtr);
    let whtr_img = document.querySelector('#main>img');
    whtr_img.src = `img/${whtr}.png`;
}

var search = ()=>{
    let n = document.querySelector('#search>input');
    if(n.value.trim()==""){
        window.alert("Please Enter City Name..")
    }
    else{
        let cn = n.value;
        weather(cn);
    }
}
