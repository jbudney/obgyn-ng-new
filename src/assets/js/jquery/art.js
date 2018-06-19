/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

jQuery(function ($) {
    'use strict';
    var fs = ( $('#blueimp-gallery').attr('data-fullscreen') == '1' );
    var borderless = ( $('#blueimp-gallery').attr('data-useBootstrapModal') == '1' );
    $('#blueimp-gallery').data( 'fullScreen', fs );
    $('#blueimp-gallery').data( 'useBootstrapModal', !borderless );
    $('#blueimp-gallery').toggleClass('blueimp-gallery-controls', borderless);
});

$('.bxslider').bxSlider({
  minSlides: 3,
  maxSlides: 4,
  slideWidth: 170,
  slideMargin: 10
});