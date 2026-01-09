const hamburger = document.getElementById ('hamburger');
const navMenu = document.getElementById ('nav-menu');

function toggleMenu() {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}
hamburger.addEventListener('click', toggleMenu);


        // TEXT ROTATOR
const texts = ["Fullstack Software Engineer", "Web Designer", "Prompt Engineer", "Automations Engineer"];
let currentIndex = 0;
const textElement = document.getElementById ("text-rotator");

// Fade out and Fade in
setInterval(() => {
    textElement.style.opacity = 0;
    setTimeout(() => {
        textElement.textContent = texts[currentIndex];
        textElement.style.opacity = 0; 
        currentIndex = (currentIndex + 1) % texts.length;
    }, 800);
}, 800);


    // const rotatingTexts = ["Fullstack Software Engineer", "Web Designer", "Prompt Engineer", "Automations Engineer"];
    // let textIndex = 0;
    // const rotatingTextElement = document.getElementById ("text-rotator");

    // rotatingTextElement.textContent = rotatingTexts[textIndex];
    // textIndex = (textIndex + 1) % rotatingTexts.length;

    // setInterval(() => {
    //     rotatingTextElement.style.opacity = 0;
    //     setTimeout(() => {
    //         rotatingTextElement.textContent = rotatingTexts[textIndex];
    //         rotatingTextElement.style.opacity = 1;
    //         textIndexIndex = (rotatingIndex + 1) % texts.length;
    //     }, 500);
    // }, 500);

    // You-Selected SECTION
function handleSelection (selectElement){
    let selectedValue = selectElement.value;
    alert("you selected: " + selectedValue)
}



// function showDetails(About) {
//     const detailsSections = document.querySelectorAll('.details')
//     detailsSections.forEach(section => section.Style.dispaly = 'none');
// }

// function showDetails(Section) {
//     const detailsSections = document.querySelectorAll('.details');
//     detailsSections.forEach(section => section.style.display = 'none');
//     const selectedDetails = document.getElementsBy(Section);
//     selectedDetails.style.display = 'block';
// }