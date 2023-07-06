const swiper = new Swiper('.swiper', {
    autoplay : {
        delay: 3000,
        disableOnInteraction: false,
    },
    // Esas parametr
    loop: true,
    // Bize lazim olan sehife 
    pagination: {
      el: '.swiper-pagination',
      clikable: true,
    },
  
    // Naviqasiya oxu
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    
  });