$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
      


  var isOpen = false
  $('.img-fluid.bars').parent().click(function(){
    $('.menuDropDown').toggle(300)
    $('.menubg').show()
    isOpen = !isOpen

    console.log(isOpen)
  })

  $('.menubg').click(function(){
    $('.menuDropDown').toggle(300)
    $('.menubg').hide()
    isOpen = !isOpen
  })