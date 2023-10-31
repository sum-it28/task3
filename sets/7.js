const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnpop = document.querySelector('.btnlogin');
const iconclose = document.querySelector('.icon-close');

registerlink.addEventListener('click',()=> {
    wrapper.classList.add('active');
});

loginlink.addEventListener('click',()=> {
    wrapper.classList.remove('active');
});

btnpop.addEventListener('click',()=> {
    wrapper.classList.add('active-pop');
});

iconclose.addEventListener('click',()=> {
    wrapper.classList.remove('active-pop');
});