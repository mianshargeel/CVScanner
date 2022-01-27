console.log('This is Project 5 about CV Scanner');
//Data is an Array of Objects which contain information of candidates 
//randomuser.me api (to get fake api)

//Array of Objects
let arrayOfCandidates = [
    { name: "Saleem Khan", age: 22, city: "Kiev", language: "Python", framework: "React", image: "https://randomuser.me/api/portraits/men/65.jpg" },
    { name: "Aleem Khan", age: 22, city: "Warsew", language: "JavaScript", framework: "React", image: "https://randomuser.me/api/portraits/men/77.jpg" },
    { name: "Salman Khan", age: 22, city: "Kiev", language: "Python", framework: "React", image: "https://randomuser.me/api/portraits/men/78.jpg" },
    { name: "Wazeer Khan", age: 22, city: "Warsew", language: "JavaScript", framework: "React", image: "https://randomuser.me/api/portraits/men/72.jpg" },
    { name: "Mohsan Khan", age: 22, city: "Krakow", language: "Python", framework: "React", image: "https://randomuser.me/api/portraits/men/71.jpg" },
    { name: "Adeel Khan", age: 22, city: "Kiev", language: "JavaScript", framework: "React", image: "https://randomuser.me/api/portraits/men/73.jpg" },
    { name: "Shargeel Khan", age: 22, city: "Warsew", language: "Python", framework: "React", image: "https://randomuser.me/api/portraits/men/75.jpg" },
    { name: "Umair Khan", age: 22, city: "Krakow", language: "JavaScript", framework: "React", image: "https://randomuser.me/api/portraits/men/79.jpg" }
];
// console.log(arrayOfCandidates);

//creating CV Iterator using Ternar Operater
function cvIterator(myArray) { //an array
    let indexNext = 0;
    return {
        next: function() {
            return indexNext < myArray.length ? { value: myArray[indexNext++], done: false } : { done: true } //use of Ternary Operator
        }
    }
}

//creating an instance to iterate Array
const candidates = cvIterator(arrayOfCandidates); //  and passing Array of Objects --> arrayOfCandidates
console.log(candidates.next().value);

nextCV(); //calling here to show first candidate by default
//creating event Listener for button Next
let next = document.getElementById("next");
next.addEventListener("click", nextCV);

function nextCV() {
    console.log('you clicked to see next cv');

    const currentCandidate = candidates.next().value; //in currentCandidate storing values of data
    // console.log(currentCandidate);

    let image = document.getElementById("image");
    let profile = document.getElementById("profile");
    //console.log(image, profile);
    if (currentCandidate != undefined) {
        image.innerHTML = `<img src='${currentCandidate.image}'>`; //becouse array
        // in profile recieving all values of candidates except image
        profile.innerHTML = `<ul class="list-group">
            <li class="list-group-item">Candidate Name: ${currentCandidate.name}</li>
            <li class="list-group-item">Candidate is ${currentCandidate.age} Years Old</li>
            <li class="list-group-item">Candidate From: ${currentCandidate.city}</li>
            <li class="list-group-item">Primarily Works on: ${currentCandidate.language}</li>
            <li class="list-group-item">Primarily Works on Framework: ${currentCandidate.framework}</li>
        </ul>`;
    } else {
        alert("End of Candidates List.");
        window.location.reload(); //when user click on ok on alert page will reload for default
    }
}




//creating CV Iterator 2nd method
// function cvIterator(profile) { //an array
//     let indexNext = 0;
//     return {
//         next: function() { //Anonymous function
//             if (indexNext > profile.length) {
//                 return {
//                     value: profile[indexNext++],
//                     done: false
//                 }
//             } else {
//                 return {
//                     done: true
//                 }
//             }
//         }
//     }
// }








// next: function {
//     return indexNext > profile.length ? value : profile[indexNext++], done: false: done: true //yse of Ternary Operator
// }