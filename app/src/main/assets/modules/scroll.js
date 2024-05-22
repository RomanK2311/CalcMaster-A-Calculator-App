const user1 = document.getElementById('headUser-1')

function changeColorOnScroll1() {
    var container = document.getElementById('headUser-1');
    var scrollY = container.scrollTop;
  
    if (scrollY >= 50) {
      document.getElementById('head-1').style.backgroundColor = 'var(--Surface-Container)'; 
      document.getElementById('head-1').style.transition = ''; 

      document.getElementById('headUser-1').style.scrollSnapType = 'unset'; 
      container.removeEventListener('scroll', changeColorOnScroll1); 
      checkSearchScroll()

    } else {

    }
  }
  
  if(user1){
    document.getElementById('headUser-1').addEventListener('scroll', changeColorOnScroll1);
    }
  
  

  function changeColorOnScroll1A() {
    var container = document.getElementById('headUser-1');
    var scrollY = container.scrollTop;
  
    if (scrollY <= 1) {
      document.getElementById('head-1').style.backgroundColor = ''; 
      document.getElementById('head-1').style.transition = 'background-color 0.2s ease-in'; 

      checkTHEME();
      container.addEventListener('scroll', changeColorOnScroll1); 
      if(scrollY <= 20); {
        document.getElementById('headUser-1').style.scrollSnapType = ''; 

      }

    } else{
        
    }
  }
  
  if(user1){
  document.getElementById('headUser-1').addEventListener('scroll', changeColorOnScroll1A);
  }



  // history 

const user2 = document.getElementById('historyContent')

  function changeColorOnScroll2() {
    var container = document.getElementById('historyContent');
    var scrollY = container.scrollTop;
  
    if (scrollY >= 10) {
      document.getElementById('head-2').style.backgroundColor = 'var(--Surface-Container)'; 
      document.getElementById('head-2').style.transition = ''; 


      container.removeEventListener('scroll', changeColorOnScroll2); 
      checkSearchScroll()

    } else {

    }
  }
  

  if(user2){
    document.getElementById('historyContent').addEventListener('scroll', changeColorOnScroll2);
  } else{
    
  }
  

  function changeColorOnScroll2A() {
    var container = document.getElementById('historyContent');
    var scrollY = container.scrollTop;
  
    if (scrollY <= 0) {
      document.getElementById('head-2').style.backgroundColor = ''; 
      document.getElementById('head-2').style.transition = 'background-color 0.2s ease-in'; 

      checkTHEME();
      container.addEventListener('scroll', changeColorOnScroll2); 
      if(scrollY <= 20); {
       

      }

    } else{
        
    }
  }

  if(user2){
  document.getElementById('historyContent').addEventListener('scroll', changeColorOnScroll2A);
}


// unit




const user3 = document.getElementById('headUser-3')



function changeColorOnScroll3() {
  var container = document.getElementById('headUser-3');
  var scrollY = container.scrollTop;

  if (scrollY >= 50) {
    document.getElementById('head-3').style.backgroundColor = 'var(--Surface-Container)'; 
    document.getElementById('head-3').style.transition = ''; 

    document.getElementById('headUser-3').style.scrollSnapType = 'unset'; 
    container.removeEventListener('scroll', changeColorOnScroll3); 
    checkSearchScroll()

  } else {

  }
}

if(user3){
  document.getElementById('headUser-3').addEventListener('scroll', changeColorOnScroll3);
  }



function changeColorOnScroll3A() {
  var container = document.getElementById('headUser-3');
  var scrollY = container.scrollTop;

  if (scrollY <= 1) {
    document.getElementById('head-3').style.backgroundColor = ''; 
    document.getElementById('head-3').style.transition = 'background-color 0.2s ease-in'; 

    checkTHEME();
    container.addEventListener('scroll', changeColorOnScroll3); 
    if(scrollY <= 20); {
      document.getElementById('headUser-3').style.scrollSnapType = ''; 

    }

  } else{
      
  }
}

if(user3){
document.getElementById('headUser-3').addEventListener('scroll', changeColorOnScroll3A);
}



// formatting


const user4 = document.getElementById('headUser-4')



function changeColorOnScroll4() {
  var container = document.getElementById('headUser-4');
  var scrollY = container.scrollTop;

  if (scrollY >= 50) {
    document.getElementById('head-4').style.backgroundColor = 'var(--Surface-Container)'; 
    document.getElementById('head-4').style.transition = ''; 

    document.getElementById('headUser-4').style.scrollSnapType = 'unset'; 
    container.removeEventListener('scroll', changeColorOnScroll4); 
    checkSearchScroll()

  } else {

  }
}

if(user4){
  document.getElementById('headUser-4').addEventListener('scroll', changeColorOnScroll4);
  }



function changeColorOnScroll4A() {
  var container = document.getElementById('headUser-4');
  var scrollY = container.scrollTop;

  if (scrollY <= 1) {
    document.getElementById('head-4').style.backgroundColor = ''; 
    document.getElementById('head-4').style.transition = 'background-color 0.2s ease-in'; 

    checkTHEME();
    container.addEventListener('scroll', changeColorOnScroll4); 
    if(scrollY <= 20); {
      document.getElementById('headUser-4').style.scrollSnapType = ''; 

    }

  } else{
      
  }
}

if(user4){
document.getElementById('headUser-4').addEventListener('scroll', changeColorOnScroll4A);
}


// about app

const user6 = document.getElementById('headUser-6')



function changeColorOnScroll6() {
  var container = document.getElementById('headUser-6');
  var scrollY = container.scrollTop;

  if (scrollY >= 50) {
    document.getElementById('head-6').style.backgroundColor = 'var(--Surface-Container)'; 
    document.getElementById('head-6').style.transition = ''; 

    document.getElementById('headUser-6').style.scrollSnapType = 'unset'; 
    container.removeEventListener('scroll', changeColorOnScroll6); 
    checkSearchScroll()

  } else {

  }
}

if(user6){
  document.getElementById('headUser-6').addEventListener('scroll', changeColorOnScroll6);
  }



function changeColorOnScroll6A() {
  var container = document.getElementById('headUser-6');
  var scrollY = container.scrollTop;

  if (scrollY <= 1) {
    document.getElementById('head-6').style.backgroundColor = ''; 
    document.getElementById('head-6').style.transition = 'background-color 0.2s ease-in'; 

    checkTHEME();
    container.addEventListener('scroll', changeColorOnScroll6); 
    if(scrollY <= 20); {
      document.getElementById('headUser-6').style.scrollSnapType = ''; 

    }

  } else{
      
  }
}

if(user6){
document.getElementById('headUser-6').addEventListener('scroll', changeColorOnScroll6A);
}


// licenses


const user7 = document.getElementById('headUser-7')



function changeColorOnScroll7() {
  var container = document.getElementById('headUser-7');
  var scrollY = container.scrollTop;

  if (scrollY >= 50) {
    document.getElementById('head-7').style.backgroundColor = 'var(--Surface-Container)'; 
    document.getElementById('head-7').style.transition = ''; 

    document.getElementById('headUser-7').style.scrollSnapType = 'unset'; 
    container.removeEventListener('scroll', changeColorOnScroll7); 
    checkSearchScroll()

  } else {

  }
}

if(user7){
  document.getElementById('headUser-7').addEventListener('scroll', changeColorOnScroll7);
  }



function changeColorOnScroll7A() {
  var container = document.getElementById('headUser-7');
  var scrollY = container.scrollTop;

  if (scrollY <= 1) {
    document.getElementById('head-7').style.backgroundColor = ''; 
    document.getElementById('head-7').style.transition = 'background-color 0.2s ease-in'; 

    checkTHEME();
    container.addEventListener('scroll', changeColorOnScroll7); 
    if(scrollY <= 20); {
      document.getElementById('headUser-7').style.scrollSnapType = ''; 

    }

  } else{
      
  }
}

if(user7){
document.getElementById('headUser-7').addEventListener('scroll', changeColorOnScroll7A);
}


// privacy 

const user8 = document.getElementById('headUser-8')



function changeColorOnScroll8() {
  var container = document.getElementById('headUser-8');
  var scrollY = container.scrollTop;

  if (scrollY >= 50) {
    document.getElementById('head-8').style.backgroundColor = 'var(--Surface-Container)'; 
    document.getElementById('head-8').style.transition = ''; 

    document.getElementById('headUser-8').style.scrollSnapType = 'unset'; 
    container.removeEventListener('scroll', changeColorOnScroll8); 
    checkSearchScroll()

  } else {

  }
}

if(user8){
  document.getElementById('headUser-8').addEventListener('scroll', changeColorOnScroll8);
  }



function changeColorOnScroll8A() {
  var container = document.getElementById('headUser-8');
  var scrollY = container.scrollTop;

  if (scrollY <= 1) {
    document.getElementById('head-8').style.backgroundColor = ''; 
    document.getElementById('head-8').style.transition = 'background-color 0.2s ease-in'; 

    checkTHEME();
    container.addEventListener('scroll', changeColorOnScroll8); 
    if(scrollY <= 20); {
      document.getElementById('headUser-8').style.scrollSnapType = ''; 

    }

  } else{
      
  }
}

if(user8){
document.getElementById('headUser-8').addEventListener('scroll', changeColorOnScroll8A);
}
