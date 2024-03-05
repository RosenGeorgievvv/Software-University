document.querySelectorAll('section').forEach(sec => sec.style.display = 'none');

const userNav = document.querySelector("li.user");
const guestNav = document.querySelector('li.guest');

const userData = JSON.parse(sessionStorage.getItem("userData"));

function updateNav(){
  if(userData){
    userNav.forEach(li =>{
        li.style.display = 'block'
    });
    
    guestNav.forEach(li =>{
        li.style.display = ' none'
    });
  }else{
    userNav.style.display = 'none';
    guestNav.style.display = 'block';
  }
}