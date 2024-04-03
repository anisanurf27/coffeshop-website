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
          Swal.fire("Sukses", "Logout Berhasil!", "success");
          window.location.href = "home-login.html";
      }
      else{
          Swal.fire("Gagal", "Tidak Jadi Logout!", "error");
          return;
      }
  
  });
}


document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal', // or 'vertical'
      loop: true,
      centeredSlides: true,
      
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
  
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  
      // Autoplay
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
  
      // Use slide or fade transition effect
      speed: 2000,
      effect: 'fade',
      fadeEffect: {
            crossFade: true,
       },
    });
  });

  var myCarousel = new bootstrap.Carousel(document.getElementById('carouselExampleControlsNoTouching2'), {
    interval: 5000, // Atur interval waktu dalam milidetik (misalnya 5000 untuk 5 detik)
    wrap: true // Aktifkan opsi wrap untuk memungkinkan pergerakan ulang ke slide pertama setelah mencapai slide terakhir
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
      setTimeout(lazyLoad, 100); // Menunda pemanggilan lazyLoad selama 200 milidetik setelah peristiwa scroll
    });

    $(window).resize(function() {
      setTimeout(lazyLoad, 100); // Menunda pemanggilan lazyLoad selama 200 milidetik setelah peristiwa resize
    });

    $(window).on('orientationchange', function() {
      setTimeout(lazyLoad, 100); // Menunda pemanggilan lazyLoad selama 200 milidetik setelah peristiwa perubahan orientasi
    });

    lazyLoad(); // Memanggil lazyLoad secara langsung saat halaman dimuat
  });