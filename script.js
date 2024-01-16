const formOpenBtn = document.querySelector("#form_open")
const ShowPPL = document.querySelector("#ppl")
const recommendedGroup = document.querySelector(".recommendedGroup")
const formMobOpenBtn = document.querySelector("#form_open_mob")
const home = document.querySelector(".home")
const Home = document.querySelector(".Home")
const formContainer = document.querySelector(".form_container")
const formCloseBtn = document.querySelector('.form_close')
const formCloseBtnSign = document.querySelector('.form_closeSignup')
const signupBtn = document.querySelector("#signup")
const mobsignin = document.querySelector("#mobsignin")
const loginBtn = document.querySelector("#login")
const moblogin = document.querySelector("#moblogin")
const pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"))
formCloseBtn.addEventListener("click", () => home.classList.remove("show"))
formMobOpenBtn.addEventListener("click", () => home.classList.add("show"))
formMobOpenBtn.addEventListener("click", () => Home.classList.add("show"))
formCloseBtnSign.addEventListener("click", () => home.classList.remove("show"))
formOpenBtn.addEventListener("click", () => Home.classList.add("show"))
formCloseBtn.addEventListener("click", () => Home.classList.remove("show"))
formCloseBtnSign.addEventListener("click", () => Home.classList.remove("show"))

ShowPPL.addEventListener("click", () => recommendedGroup.add('de'))

signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
});
mobsignin.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
});
loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active")
})
moblogin.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active")
})