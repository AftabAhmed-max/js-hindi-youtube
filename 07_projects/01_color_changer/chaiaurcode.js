let buttons = document.querySelectorAll('.button');
let body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

//   colorChange('yellow');
//   colorChange('blue');
//   colorChange('grey');
//   colorChange('white');

//  function colorChange(color) {
//   buttons.forEach( function(button) {
//     console.log(button);
//     button.addEventListener('click', function(e) {
//       console.log(e)
//       console.log(e.target)
//       if(e.target.id === color) {
//        body.style.backgroundColor = e.target.id;
//       }
//     });
//   });
//  }
