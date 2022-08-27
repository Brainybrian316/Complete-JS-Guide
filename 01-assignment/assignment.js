const task3Element = document.getElementById('task-3');

function one() {
  alert('hello world');
}

function two(name) {
  alert(name);
}

task3Element.addEventListener('click', one);

function brandNew(str1, str2, str3) {
  alert(`${str1} and ${str2} and ${str3}`)
}

one();
two('bill');
brandNew('bob', 'bill', 'mack');