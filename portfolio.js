const hamburger = document.getElementById ('hamburger');
const navMenu = document.getElementById ('nav-menu');

function toggleMenu() {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}
hamburger.addEventListener('click', toggleMenu);


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