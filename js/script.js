$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
  
    });
  
    // smooth scrolling 
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500, 
        'linear'
      );
  
    });
  
  });


function setLanguage(lang) {
    localStorage.setItem("lang", lang);

    const data = translations[lang];
    if (!data) return;

    Object.keys(data).forEach(key => {
        const el = document.getElementById(key);
        if (el) {
            el.innerHTML = data[key];
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    setLanguage(localStorage.getItem("lang") || "en");
});
