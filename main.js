// // buttons
// const taxPrep = document.querySelector("#tax-prep");
// const estatePlan = document.querySelector("#estate-planning");
// const financeAdv = document.querySelector("#financial-advice");
// const willPrep = document.querySelector("#will-prep");

// details
const taxDetails = document.querySelector("#tax-details");
const estateDetails = document.querySelector("#estate-details");
const financialDetails = document.querySelector("#financial-details");
const willDetails = document.querySelector("#will-details");


document.querySelector('#tax-prep').addEventListener('click', () => {
    taxDetails.classList.toggle('hidden');
    estateDetails.classList.add('hidden');
    financialDetails.classList.add('hidden');
    willDetails.classList.add('hidden');
})

document.querySelector('#estate-planning').addEventListener('click', () => {
    taxDetails.classList.add('hidden');
    estateDetails.classList.toggle('hidden');
    financialDetails.classList.add('hidden');
    willDetails.classList.add('hidden');
})

document.querySelector('#financial-advice').addEventListener('click', () => {
    taxDetails.classList.add('hidden');
    estateDetails.classList.add('hidden');
    financialDetails.classList.toggle('hidden');
    willDetails.classList.add('hidden');
})

document.querySelector('#will-prep').addEventListener('click', () => {
    taxDetails.classList.add('hidden');
    estateDetails.classList.add('hidden');
    financialDetails.classList.add('hidden');
    willDetails.classList.toggle('hidden');
})