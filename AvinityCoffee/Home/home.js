function btnLogout() {

  Swal.fire({
      title: "Konfirmasi",
      text: "Apakah Anda ingin Logout?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Logout!",
      cancelButtonText: "Batal"
  }).then((result) => {
      if (result.isConfirmed) {
          Swal.fire("Sukses", "Logout Berhasil!", "success").then(() => {
            window.location.href = "../home-login.html";
        });
      }
      else{
          Swal.fire("Gagal", "Tidak Jadi Logout!", "error");
          return;
      }
  
  });
}


document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal', 
      loop: true,
      centeredSlides: true,
      
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
  
      speed: 2000,
      effect: 'fade',
      fadeEffect: {
            crossFade: true,
       },
    });
  });

  var myCarousel = new bootstrap.Carousel(document.getElementById('carouselExampleControlsNoTouching2'), {
    interval: 5000, 
    wrap: true 
  });


  $(document).ready(function() {
    var lazyImages = $(".image-container img, .hover01.column img");

    function lazyLoad() {
      lazyImages.each(function() {
        var img = $(this);
        if (img.offset().top < $(window).scrollTop() + $(window).height() && !img.hasClass('loaded')) {
          img.addClass("loaded");
        }
      });
    }

    $(window).scroll(function() {
      setTimeout(lazyLoad, 100); 
    });

    $(window).resize(function() {
      setTimeout(lazyLoad, 100); 
    });

    $(window).on('orientationchange', function() {
      setTimeout(lazyLoad, 100); 
    });

    lazyLoad(); 
  });

  $(document).ready(function(){
    $('.accordion-list > li > .answer').hide();
      
    $('.accordion-list > li').click(function() {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active").find(".answer").slideUp();
      } else {
        $(".accordion-list > li.active .answer").slideUp();
        $(".accordion-list > li.active").removeClass("active");
        $(this).addClass("active").find(".answer").slideDown();
      }
      return false;
    });
    
  });