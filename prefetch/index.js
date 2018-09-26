window.onload = main;

function main() {
  setInterval(print, 1000);
  setInterval(prefetch, 2000);
  //setInterval(script, 10000);
}

function print() {
  var message = 'A';
  message = 'B';
  console.log(message);
}

function prefetch() {
  var link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = 'index.js';
  document.head.appendChild(link);
  console.log('PREFETCH');
}

// function script() {
//   var script = document.createElement('script');
//   script.src = 'index.js';
//   document.head.appendChild(script);
//   console.log('SCRIPT');
// }
