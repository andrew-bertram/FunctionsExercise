// Functions Exercise

// 1
function fozzieBear() {
    console.log(`Wocka Wocka!`);
}
fozzieBear();

console.log("========");

// 2
function beaker(speak) {
    console.log(`${speak}`);
    console.log(`${speak}`);
    console.log(`${speak}`);
    console.log(`${speak}`);
}
beaker(`Meep`);

console.log("========");

// 3
function werewolf(a, b) {
    if (a === `Muppet` && b === `Show`){
        console.log(`It's time to play the music. It's time to light the lights.`);
    }
}
werewolf(`Muppet`, `Show`);

console.log("========");

// 4
function kermit() {
    return `Kermit The Frog`;
}
console.log(kermit());

console.log("========");

// 5
function muppetShowSeasons(seasons) {
    if (seasons === "5"){
        return true;
    } else{
        return false;
    }
}
const season = muppetShowSeasons("5");
// const season = muppetShowSeasons("4"); // Will not return true since the argument does not equal "5"
console.log(season);

console.log("========");

// 6a
const muppets = [
    `Kermit The Frog`,
    `Miss Piggy`,
    `Fozzie Bear`,
    `The Great Gonzo`
];

// 6b
function showMuppets(names) {
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);
}
showMuppets(muppets);

console.log("========");

// 7
const manOrMuppet = function(){
    console.log(`Am I a man or am I a Muppet?`);
}
manOrMuppet();

console.log("========");

// 8
rainbowConnection = () => console.log(`Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me`);
rainbowConnection();

console.log("========");

// 9
// NO

// 10
// YES

// 11a
const newMuppetMovies = [
    `The Muppets`,
    `Muppets Most Wanted`
];

// 11b
function uppercaseMovies(a) {
    return a.toUpperCase();
}
const upperMovies = newMuppetMovies.map(uppercaseMovies);
console.log(upperMovies);

// function uppercaseMovies() {
//     return newMuppetMovies.toUpperCase();
// }
// const upperMovies = newMuppetMovies.map(uppercaseMovies);
// console.log(upperMovies);

console.log("========");

// 12a
const oldMuppetMovies = [
    `The Muppet Movie`,
    `THe Muppets Take Manhattan`,
    `The Great Muppet Caper`,
    `The Muppet Christmas Carol`,
    `Muppet Treasure Island`,
    `Muppets From Space`
];

// 12b
function oldMovies(movie) {
    return movie === 'The Great Muppet Caper' || movie === `Muppet Treasure Island`;
}
const twoMovies = oldMuppetMovies.filter(oldMovies);
console.log(twoMovies);

// BONUS

// 13a
const charactersOne = [
    `Statler`,
    `Waldorf`
];

// 13b
const charactersTwo = [
    `The Swedish Chef`,
    `Animal`,
    `Rowlf`
];

// 13c
// function randomMuppet(characters)