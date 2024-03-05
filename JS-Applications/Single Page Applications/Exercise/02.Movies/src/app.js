document.querySelectorAll('section').forEach(sec => sec.style.display = 'none');

const userNav = document.querySelectorAll("li.user");
const guestNav = document.querySelectorAll('li.guest');

const userData = JSON.parse(sessionStorage.getItem("userData"));

function updateNav(){
  if(userData){
    userNav.forEach(li =>{
        li.style.display = 'block'
    });
    
    guestNav.forEach(li =>{
        li.style.display = 'none'
    }); 

  }else{
    userNav.forEach(li => {
        li.style.display = 'none';
    });

    guestNav.forEach(li => {
        li.style.display = 'block';
    });

  }
}
updateNav();