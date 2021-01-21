console.log("A few things about me!")

let firstName = "Austin";
let lastName = "Mann";
let fullName = firstName + " " + lastName;
let fullNameCaps = fullName.toUpperCase();

displayDescription(fullNameCaps, "Student of coding bootcamp", "Disc Golf is my favorite activity to do in my free time");

function displayDescription(myName, myJob, myDescription) {
    console.log("Name: " + myName);
    console.log("Career: " + myJob);
    console.log("Description: " + myDescription);
}

console.log("");

console.log("My Interests:");
displayInterests("Video Games");
displayInterests("Disc Golf");
displayInterests("Alabama Crimson Tide Sports");

function displayInterests(myInterest) {
    console.log("* " + myInterest);

}

console.log("");

console.log("Past Positions: ");
displayExperience("YMCA Lifeguard - Providing a safe enviorment for patrons to swim ");
displayExperience("Mover/Packer McCorquodale Transfer - Pack and Move customers from point A to point B");
displayExperience("ACIPCO Laborer - Repair and Paint pipe");

function displayExperience(myExperience) {
    console.log("* " + myExperience);
}

console.log("");

console.log("My Skills:");
displaySkills("HTML" , false);
displaySkills("CSS" , true);
displaySkills("JavaScript" , true);

function displaySkills(mySkills) {
    console.log(mySkills);
}


function displaySkills(mySkills, myBam) {
    if(myBam == true){
        console.log("* BAM: " + mySkills);
    } else if (myBam == false){
        console.log("* " + mySkills);
    };
}




