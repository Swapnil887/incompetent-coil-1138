let image = ["images/img1.png", "images/img2.png", "images/img3.png", "images/img4.png"]


    let i = 0;

    function slideshow() {
        document.getElementById("images").src = image[i];
        i++;
        if (i > image.length - 1) {
            i = 0;
        }
    }
    setInterval(slideshow, 5000)


    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        centeredSlides: true,
        spaceBetween: 30,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });