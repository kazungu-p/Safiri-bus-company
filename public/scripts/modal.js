
document.addEventListener("DOMContentLoaded", ()=>{
const modal = document.getElementById("loginModal");
const closeBtn = document.querySelector(".close");
const loginBtns = document.querySelectorAll(".open-login");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const radioBtn = document.querySelectorAll("input[name='authMode']")

loginBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.add("show")
    });
});

closeBtn.addEventListener("click", () => modal.classList.remove("show"));

window.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("show");
});

radioBtn.forEach((radio, index)=>{
    radio.addEventListener("change", ()=>{
        if(index===0){
            loginForm.classList.remove("hidden");
            registerForm.classList.add("hidden");
        }else{
            registerForm.classList.remove("hidden");
            loginForm.classList.add("hidden");
        }
    });
});

});
