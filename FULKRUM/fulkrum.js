
// for menu button
var menubar = document.getElementById('menubar');
    var navbar = document.getElementById('navbar');
    
    menubar.addEventListener ('click', function(){
           
        navbar.classList.toggle('mobile-menu');
    })

// for fixed navbar
window.onscroll = () =>{

    menubar.classList.remove('fa-times');
    navbar.classList.remove('mobile-menu');
  
    if(window.scrollY > 60){
      document.querySelector('#scroll-top').classList.add('mobile-menu');
    }else{
      document.querySelector('#scroll-top').classList.remove('mobile-menu');
    }
  
    // for arrow
//     if(scrollHeight > 500){
//         navlinks.classList.add('mobile-menu');
//     }
//     else{
//         navlinks.classList.remove('mobile-menu');
//     }
  }

// for slider
var slideImg = document.getElementById('slideImg');
var images = new Array(
            'people-talkie.jpg',
            'talkie-favicon.png',
            'yellow-talkie.png'
        )
var len= images.length;
var i = 0;

function slider(){
    if (i>len-1){
    i=0
    }
    slideImg.src = images[i];
    i++

    setTimeout('slider()', 2000);
    }


    // for faq
    var faq = document.getElementsByClassName("faq-question");
var i;

for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
} 

// var faqs = document.querySelectorAll('.faq-question');

// faqs.forEach(function(faqs){
//     faqs.addEventListener('click',function(){
//         faqs.classList.toggle('.active');

//         var body = this.nextElementSibling;

//         if(body.style.display=== 'block'){
//             body.style.display = 'none';
//         }
//         else{
//             body.style.display = 'block';
//         }
//     })
// })


// arrow

//footer

const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();