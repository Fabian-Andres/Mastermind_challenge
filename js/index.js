#!/usr/bin/env node
let colors = ['bg-white', 'bg-danger', 'bg-success', 'bg-primary', 'bg-warning', 'bg-dark']
let hm = document.getElementById('HM')
let tm = [];
let pm = [];

for (let i = 0; i < 9; i++){
  tm.push(document.getElementById('TM' + i));
  pm.push(document.getElementById('PM' + i));
}

function random() {
  var arr = [];
  let randomItem;
  for (let i = 0; i < 4; i++)
  {
    randomItem = colors[Math.floor(Math.random()*colors.length)];
    arr.push(randomItem);
  }
  return arr;
}

function reset() {
  let arr = random();
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 4; j++) {
      tm[i].querySelectorAll('li')[j].classList.add("bg-secondary");
      pm[i].querySelectorAll('li')[j].classList.add("bg-secondary");
    }
  }

  for (let j = 0; j < 4; j++) {
    hm.querySelectorAll('li')[j].classList.add(arr[j]);
  }
}

reset();

/*console.log(random())*/

/*let hm = document.getElementById('HM')


hm.querySelectorAll('li')[0].innerHTML*/
