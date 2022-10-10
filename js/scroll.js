ScrollReveal().reveal('.under_company_info,.news_box_img', {  
  duration: 2000, 
  origin: 'left', 
  distance: '70px',
  reset: true   
});

$(window).on('scroll load', function(){        
  var scroll = $(this).scrollTop();            
  var windowHeight = $(window).height();       
  $('.fadeIn').each(function(){                
    var cntPos = $(this).offset().top;         
    if(scroll > cntPos - windowHeight + windowHeight / 3){  
      $(this).addClass('active');              
    }
  });
});

