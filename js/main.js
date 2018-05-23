window.onload = function() {

  var notification__closed = document.getElementById('notification__closed');
  var checkbox_id = document.getElementById('checkbox_id');

  //close notification, disable tips and show notification after 5 sec

  if (localStorage.getItem('tips') !== null) {
    var tips = localStorage.getItem('tips');
    notification__closed.style.display = 'none';
  } else {
    setTimeout(function() {
      notification__closed.style.display = 'block'
    }, 5000);
  }

  var checkbox_checked = document.getElementById('closeButton').addEventListener('click', function(e) {
    if (checkbox_id.checked) {
      e.preventDefault();
      notification__closed.style.display = 'none';
      localStorage.setItem('tips', 'hidden');
    }
    e.preventDefault();
    notification__closed.style.display = 'none';
  });

};

//make slider

var slideIndex = 3;

showContent(slideIndex);

function plusIndex(n) {
  showContent(slideIndex += n);
}

function currentSlide(n) {
  showContent(slideIndex = n);
}

function showContent(n) {

  var dayTips = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio accusamus qui sit doloribus, aut quisquam.',
                 'everyday Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                 'More than 60% of emails we send do not require a response. Use "No response needed" to make sure recipients know that a response is unnecessary.',
                 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio accusamus qui sit.',
                 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio accusamus qui sit doloribus.',
                 'Lorem ipsum dolor sit amet, consectetur adipisicing.'];

  var dots = document.getElementsByClassName("dots");

  if (n > dayTips.length) {
    slideIndex = 1
  };
  if (n < 1) {
    slideIndex = dayTips.length
  };

  document.getElementById("tip").innerHTML = dayTips[slideIndex - 1];

  for (var i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "")
  }

  dots[slideIndex - 1].className += " active";

}

//keyboard controls for slider

window.addEventListener("keydown", checkKeyPress, false);

function checkKeyPress(key) {
  if (key.keyCode == "37") {
    plusIndex(-1);
  }

  if (key.keyCode == "39") {
    plusIndex(+1);
  }

  if (key.keyCode == "27") {
    notification__closed.style.display = 'none';
  }
}
