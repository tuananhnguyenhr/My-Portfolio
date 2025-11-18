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
    const items = document.querySelectorAll("[id]");

    items.forEach(el => {
        const key = el.id.replace(/-([a-z])/g, (g) => g[1].toUpperCase());

        if (langData[lang] && langData[lang][key]) {
            el.innerHTML = langData[lang][key];
        }
    });

    localStorage.setItem("siteLanguage", lang);
}

document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("siteLanguage") || "en";
    setLanguage(savedLang);
});
