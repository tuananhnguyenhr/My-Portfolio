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
        if (!el) return;

        // Nếu key là mô tả (Desc), convert \n thành <br>
        el.innerHTML = data[key].replace(/(\r\n|\r|\n)/g, '<br>');
    });
}

// Khi tải trang
document.addEventListener("DOMContentLoaded", () => {
    setLanguage(localStorage.getItem("lang") || "en");
});


document.addEventListener("DOMContentLoaded", () => {
    setLanguage(localStorage.getItem("lang") || "en");
});


// gửi mail
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault(); // chặn reload trang

    const name = document.getElementById("contactName").value;
    const email = document.getElementById("contactMail").value;
    const project = document.getElementById("contactProject").value;
    const message = document.getElementById("contactMessage").value;

    const templateParams = {
        from_name: name,
        from_email: email,
        project_name: project,
        message: message
    };

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
    .then(function(response) {
        alert("Message sent successfully!");
        document.getElementById("contactForm").reset(); // xóa form
    }, function(error) {
        alert("Failed to send message: " + JSON.stringify(error));
    });
});

// Tạo tài khoản EmailJS (https://www.emailjs.com/
// ).

// Tạo Service ID (dịch vụ email), Template ID (mẫu mail).

// Thay "YOUR_USER_ID", "YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID" bằng thông tin của bạn.
