const balls = document.getElementsByClassName('ball');

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  for (var e = 0; e < balls.length; e++){
    balls[e].style.left = x;
    balls[e].style.top = y;
    balls[e].transform = 'translate(-' + x + ',-' + y + ')';
  }

  
};
