console.log("hello from js");

const weatherForm = document.querySelector('form')
const input = document.querySelector('input')
const searchButton = document.querySelector('button')

const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const currentTime = document.querySelector('#current')

const text = ''
messageOne.textContent=''
messageTwo.textContent=''
currentTime.textContent=''

const image = document.querySelector('#img')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(input.value);
    messageOne.textContent = 'Loading....';
    messageTwo.textContent = '';

    fetch('http://localhost:3000/weather?address='+input.value).then((response) => {
        response.json().then(({data,address}) => {
            console.log("Data", data);
            messageOne.textContent = 'Location : '+address;
            messageTwo.textContent=data.weather_descriptions[0]+'. it is '+data.temperature+' degrees, but feels like '+data.feelslike+' degrees'
            image.src = data.weather_icons[0];
            
            if(data.is_day === 'no'){
            currentTime.textContent= 'Currently it is Night time'
            }else{
            currentTime.textContent= 'Currently it is Day time'
                
            }
        })

    })

})