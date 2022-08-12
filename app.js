/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       <YOUR_NAME>
 *      Student ID: <YOUR_STUDENT_ID>
 *      Date:       <SUBMISSION_DATE>
 */

// const form = document.querySelector("form");

// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     form.remove();
//     const thank = document.getElementById('thank');
//     if (thank !== null) {
//         thank.style.display = "block";
//     }
// });

function ShowHideDiv(obj) {
    var hiring = document.getElementById("hiring");
    var rateTxt = document.getElementById("rateTxt");
    rateTxt.style.display = hiring.checked ? "block" : "none";
    if (hiring.checked) {
        var rateInput = document.getElementById("rate");
        rate.setAttribute("required", true);
    }
}



