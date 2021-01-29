$('.carousel').carousel({
    interval: 2000
});

$(window).scroll(function() {
  var position = $(this).scrollTop();
  $('section').each(function() {
      var target = $(this).offset().top;
      var id = $(this).attr('id');
      
      if (position >= target) {

        $('.nav-button').removeClass('scrolled');

        $('#' + id+'b').addClass('scrolled');
        $('#' + id+'m').addClass('scrolled');
      }
  });
});



$(".nav-button").on("click", function (e) {
  // 1
  e.preventDefault();
  // 2
  const href = $(this).attr("href");
  // 3
  

  $("html, body").animate({ scrollTop: $(href).offset().top }, 600);
});

$(".carousel-button").on("click", function (e) {
  // 1

  e.preventDefault();
  // 2
  const href = $(this).attr("href");
  // 3
  
  $("html, body").animate({ scrollTop: $(href).offset().top }, 600);
});

function currentTest(n){
  slide1 = document.getElementById("test1");
  slide2 = document.getElementById("test2");
  slide3 = document.getElementById("test3");
  slide1.style.display = "none";
  slide2.style.display = "none";
  slide3.style.display = "none";

  if (n == 1){
    slide1.style.display = "grid";
    slide2.style.display = "grid";
  }
  if (n == 2){
    slide2.style.display = "grid";
    slide3.style.display = "grid";
  }
  if (n == 3){
    slide3.style.display = "grid";
    slide1.style.display = "grid";
  }
}

function currentTestMov(n){
  slide1 = document.getElementById("test1");
  slide2 = document.getElementById("test2");
  slide3 = document.getElementById("test3");
  slide1.style.display = "none";
  slide2.style.display = "none";
  slide3.style.display = "none";

  if (n == 1){
    slide1.style.display = "grid";
  }
  if (n == 2){
    slide2.style.display = "grid";
  }
  if (n == 3){
    slide3.style.display = "grid";
  }
}

var menu = false;

function toggleMenu(){
  var menuBar = document.getElementById('mobile-menu')

  if(menu){
    menuBar.style.display = "none";
    menu = false;
  }else{
    menuBar.style.display = "grid";
    menu = true;
  }
}

function closeMenu(){
  var menuBar = document.getElementById('mobile-menu')
  menuBar.style.display = "none";
  menu = false;
}



