
// variables
var $header_top = $('.header-top');
var $nav = $('nav');

//tooltip

  
// toggle menu 
$header_top.find('a').on('click', function() {
  $(this).parent().toggleClass('open-menu');

});



// fullpage customization
$('#fullpage').fullpage({
  sectionsColor: ['#B8AE9C', '#348899', '#F2AE72', '#5C832F','#B8AE9C', '#348899', '#F2AE72', '#5C832F'],
  sectionSelector: '.vertical-scrolling',
  navigation: true,
  navigationPosition: 'left',
  controlArrows: false,
  anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection','fifthSection','sixthSection','seventhSection','eighthSection'],
  menu: '#menu',
  navigationTooltips: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection','fifthSection','sixthSection','seventhSection','eighthSection'],
  showTooltip: 'true',
  responsiveHeight: 410,
  responsiveWidth: 400,

  afterLoad: function(anchorLink, index) {
    $header_top.css('background', 'rgba(0, 47, 77, .3)');
    $nav.css('background', 'rgba(0, 47, 77, .25)');
    if (index == 8|| index == 1) {
        $('#fp-nav').hide();
      }
  },

  onLeave: function(index, nextIndex, direction) {
    if(index == 8 || index == 1) {
      $('#fp-nav').show();
    }
  },

  // afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
  //   if(anchorLink == 'fifthSection' && slideIndex == 1) {
  //     $.fn.fullpage.setAllowScrolling(false, 'up');
  //     $header_top.css('background', 'transparent');
  //     $nav.css('background', 'transparent');
  //     $(this).css('background', '#374140');
  //     $(this).find('h2').css('color', 'white');
  //     $(this).find('h3').css('color', 'white');
  //     $(this).find('p').css(
  //       {
  //         'color': '#DC3522',
  //         'opacity': 1,
  //         'transform': 'translateY(0)'
  //       }
  //     );
  //   }
  // },

  // onSlideLeave: function( anchorLink, index, slideIndex, direction) {
  //   if(anchorLink == 'fifthSection' && slideIndex == 1) {
  //     $.fn.fullpage.setAllowScrolling(true, 'up');
  //     $header_top.css('background', 'rgba(0, 47, 77, .3)');
  //     $nav.css('background', 'rgba(0, 47, 77, .25)');
  //   }
  // } 
});