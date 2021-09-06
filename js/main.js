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


  $('.text-dark.loadMore').click(function(e){
    e.preventDefault()
    $('.row.MoreArticles').css('display','flex')
  })


  $('.text-dark.loadMore1').click(function(e){
    e.preventDefault()
    $('.row.MoreArticles1').css('display','flex')
  })
  
  $('.text-dark.loadMore2').click(function(e){
    e.preventDefault()
    $('.row.MoreArticles2').css('display','flex')
  })

  $('.text-dark.loadMore3').click(function(e){
    e.preventDefault()
    $('.row.MoreArticles3').css('display','flex')
  })
  $('.text-dark.loadMore4').click(function(e){
    e.preventDefault()
    $('.row.MoreArticles4').css('display','flex')
  })

  $('.img-fluid.logo').attr('src','img/B.A.D. LOGO - HORIZONTAL.svg')