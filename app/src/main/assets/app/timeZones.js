function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var timeString = hours + ':' + minutes + ' ' + ampm;
    document.getElementById('time_home').textContent = timeString;

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var month = months[now.getMonth()];
    var date = now.getDate();
    var year = now.getFullYear();
    var dateString = date + ' ' + month + ' ' + year;
    document.getElementById('date_home').textContent = dateString;
}

updateTime();
setInterval(updateTime, 1000);


const addTimeZoneBtn = document.getElementById('add_time_zone_btn');
const timeZoneAddPage = document.getElementById('time_zone_add_page');
const searchtimeZoneinput = document.getElementById('Search_input_timezone');
const ClearSearchInputTime = document.getElementById('clearInputSearch');
const suggestionsList = document.getElementById('suggestions');
const clocksList = document.getElementById('world_clocks_Container');


addTimeZoneBtn.addEventListener('click', () =>{
    timeZoneAddPage.style.display = 'block';
    checkTHEME();

    setTimeout(() =>{
        searchtimeZoneinput.focus()

    }, 200);

    setTimeout(() =>{
        window.history.pushState({ modal: `modal-1` }, '', `#activity-1`);
        window.history.replaceState({ modal: `modal-1` }, '', window.location.pathname)

    }, 210);

    setTimeout(() =>{
      window.history.pushState({ modal: `modal-1` }, '', `#activity-1`);
  }, 250);
});


function closeTimeZoneAddpage(){
    timeZoneAddPage.style.opacity = '0';
    document.getElementById('headUser-6').scrollTop = 0;

    setTimeout(() => {
    timeZoneAddPage.style.display = 'none';
    timeZoneAddPage.style.opacity = '';

        window.history.replaceState(null, '', window.location.pathname);
        window.history.go(-1);
    }, 200);
}


window.addEventListener('popstate', function (event) {
    const state = event.state;
    if (state && state.modal === 'modal-1') {
  
        closeTimeZoneAddpage();
    } else{
  
    }
  });

  
searchtimeZoneinput.addEventListener('input', () => {
    const query = searchtimeZoneinput.value.trim();
    if (query.length > 0) {
        ClearSearchInputTime.hidden = false;

    } else {

        setTimeout(() =>{
            ClearSearchInputTime.style.opacity = '0';

        }, 150);
        
        setTimeout(() =>{
            ClearSearchInputTime.hidden = true;
            ClearSearchInputTime.style.opacity = '';

        }, 250);

    }
});



  ClearSearchInputTime.addEventListener('click', () =>{
    searchtimeZoneinput.value = ''
    searchtimeZoneinput.focus()
    searchtimeZoneinput.dispatchEvent(new Event('input'));
  });


//   main


let savedCities = JSON.parse(localStorage.getItem('cities')) || [];

function saveToLocalStorage(city) {
    savedCities.push(city);
    localStorage.setItem('cities', JSON.stringify(savedCities));

    
}

function removeFromLocalStorage(cityIndex) {
    savedCities.splice(cityIndex, 1);
    localStorage.setItem('cities', JSON.stringify(savedCities));


 
}

function displaySavedClocks() {
    savedCities.forEach(city => displayClock(city));



}


function displayClock(city) {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const localTime = new Date(utc + (3600000 * city.offset));

    const uniqueId = 'element_' + Math.random().toString(36).substr(2, 9);

    const timeString = localTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
            const cityClock = `<div class="world_clock_div"> <p>${city.name}</p> <span class="time_world_clock_text">${timeString}</span> <div><button class="ripple_btn" onclick="removeClock(${savedCities.indexOf(city)})"><i icon-outlined>delete</i>Delete</button> </div> <i class="open_icon" icon-filled>expand_more</i> <md-ripple for='div_clock_${uniqueId}' style="--md-ripple-pressed-opacity: 0.13;"></md-ripple> <span class="class_span" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" id="div_clock_${uniqueId}"></span> <label onclick="editLabelTimeZone()"><i icon-outlined>edit</i> Label</label></div> `;
    clocksList.innerHTML += cityClock;
}



function filterCities(query) {
    return cities.filter(city => city.name.toLowerCase().includes(query.toLowerCase()));
}

function displaySuggestions(query) {
    suggestionsList.innerHTML = '';
    const filteredCities = filterCities(query);
    filteredCities.forEach(city => {
        const suggestion = document.createElement('p');
    const suggestionRIPPLE = document.createElement('md-ripple')
    suggestionRIPPLE.style = '--md-ripple-pressed-opacity: 0.18;'

        suggestion.textContent = city.name;
        suggestion.addEventListener('click', () => {
            clocksList.innerHTML = '';
            saveToLocalStorage(city);
            setTimeout(() => {
                displaySavedClocks();
            }, 100);
            closeTimeZoneAddpage()
            suggestionsList.innerHTML = '';
            searchtimeZoneinput.value = '';

            setTimeout(() =>{
                window.location.reload()
            }, 350);

  
        });
        suggestionsList.appendChild(suggestion);
        suggestion.appendChild(suggestionRIPPLE)


    });

    if (filteredCities.length > 0) {
        
    } else{
        console.log('No timezone found')

    }


}


searchtimeZoneinput.addEventListener('input', () => {
    const query = searchtimeZoneinput.value.trim();
    if (query.length > 0) {
        displaySuggestions(query);


    } else {
        suggestionsList.innerHTML = '';

    }
});

function removeClock(index) {


        removeFromLocalStorage(index);
        clocksList.innerHTML = '';
        displaySavedClocks();

        setTimeout(() =>{
            window.location.reload()
        }, 100);

}

displaySavedClocks();


const worldClockDivs = document.querySelectorAll('.world_clock_div');

worldClockDivs.forEach(function(worldClockDiv) {

    worldClockDiv.addEventListener('click', () =>{
    worldClockDiv.classList.toggle('toggleclock');

})
});




const labelEditDialog = document.getElementById('editLabelDialog');


function editLabelTimeZone(){
    labelEditDialog.show();
    dialogcolor();
}

