"use strict";
const arr = [
  ["HTML", "Java"],
  ["Java", "Python"],
  ["Python", "HTML"],
  ["C#", "Python"],
  ["Java", "C#"],
  ["C#", "HTML"],
  ["SQL", "C#"],
  ["HTML", "SQL"],
  ["SQL", "Python"],
  ["SQL", "Java"],
];

const results = [0, 0, 0, 0, 0, 0, 1, 0, 1, 1];

let obj = {};

function tourney(arr, results) {
  let winner = "";
  for (const teams of arr) {
    //put teams in a new obj
    teamsObj(teams);
  }

  for (const [i, game] of Object.entries(arr)) {
    if (results[i] === 0) {
      let winner = arr[i][1];
      obj[winner] += 3;
    }
    if (results[i] === 1) {
      let winner = arr[i][0];
      obj[winner] += 3;
    }
  }

  for (const [team, scores] of Object.entries(obj)) {
    let score = 0;
    if (scores >= score) winner = team;
  }
  console.log(winner);
}

function teamsObj([team]) {
  obj[team] = 0;
}
console.time("do");
tourney(arr, results);
console.timeEnd("do");
console.log(obj);
