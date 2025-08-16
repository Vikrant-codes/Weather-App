// alert("Hello World!!");

async function weather(c){
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${c}&appid=baa51b6b4f9915a7834693006b23962c&units=metric`;
    // using back-ticks (`) is the same concept as that of f-strings in python
    // within the string ${variable_name} is used to represent the variable

    // at the url end &units=metric is used..units is a api parameter and metric value helps to display the temp. value in °C

    let res = await fetch(url);
    // fetch() is a predefined fn used to fetch data from a url
    // Here, fetch gives promise to the variable result
    console.log(res);

    let data = await res.json();
    console.log(data);
    // .json() converts the promise to JSON (JavaScript Object Notation) format (an object)
    // JS is a synchronous language which executes the code line by line & in case some execution takes longer it starts simultaneously executing the further lines of codes.
    // await keyword is used before fetch to tell the interpreter to wait for that function and not move for any further execution.
    // await keyword is asynchronized and thus we can only use it inside asynchronized functions.
    // be default all JS functions are synchronized so to use await it is necessary to use the async keyword to make the functions asynchronized
    if(data.cod=="404"){
        // error cod 404 checks for any invalid city name
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
    let whtr = data.weather[0].main;
    console.log(whtr);
    
    let whtr_img = document.querySelector('#main>img');

    if(whtr=='Clear'){
        whtr_img.src='img/clear.png';
    }
    else if(whtr=='Clouds'){
        whtr_img.src='img/clouds.png';
    }
    else if(whtr=="Mist"){
        whtr_img.src='img/mist.png';
    }
    else if(whtr=='Haze'){
        whtr_img.src='img/haze.png';
    }
    else if(whtr=="Drizzle"){
        whtr_img.src='img/drizzle.png';
    }
    else if(whtr=="Rain"){
        whtr_img.src='img/rain.png';
    }
    else if(whtr=="Snow"){
        whtr_img.src='img/snow.png';
    }

}

var search = ()=>{
    let n = document.querySelector('#search>input');
    // document.querySelector is used to select a html element without using id, class or name
    if(n.value.trim()==""){
        // .trim() functions removes the blank spaces from strings
        window.alert("Please Enter City Name..")
    }
    else{
        let cn = n.value;
        // window.alert(cn);
        weather(cn);
    }
}
