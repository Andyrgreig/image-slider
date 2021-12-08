function imageSlider() {
  const images = document.querySelectorAll('.slider img');
  const backBtn = document.getElementById('back');
  const forwardBtn = document.getElementById('forward');
  const buttons = document.querySelectorAll('button');
  let num = 0;

  function back() {
    let next;
    if (num == 0) {
      next = images.length - 1;
    } else {
      next = num - 1;
    }
    changePicture(num, next);
    num == 0 ? (num = images.length - 1) : num--;
  }

  function forward() {
    let next;
    if (num == images.length - 1) {
      next = 0;
    } else {
      next = num + 1;
    }
    changePicture(num, next);
    num == images.length - 1 ? (num = 0) : num++;
  }

  function jumpToImage(int) {
    changePicture(num, int);
    num = parseInt(int);
  }

  function changePicture(current, next) {
    images[current].style.display = 'none';
    images[next].style.display = 'block';
    buttons[current].style.backgroundColor = 'white';
    buttons[next].style.backgroundColor = 'gray';
  }

  //Event listeners
  backBtn.addEventListener('click', back);
  forwardBtn.addEventListener('click', forward);
  buttons.forEach((elem) =>
    elem.addEventListener('click', function () {
      jumpToImage(this.dataset.ind);
    })
  );

  return forward;
}

const carousel = imageSlider();
setInterval(carousel, 5000);
