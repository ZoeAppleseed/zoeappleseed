/*
 * blueimp Gallery Demo JS 2.10.0
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/* global, blueimp, $, tumblr_api_read */

function log_me(data){
   var carouselLinks = [],
    linksContainer = $('#links'),
    baseUrl;
    // Add the demo images as links with thumbnails to the page:
    $.each(data.response.posts, function (index, post) {
        var caption = '';
        
        $('<a/>')
            .append($('<img>').prop('src', ''))
            .prop('href', post.photos[0].original_size.url)
            .prop('title', caption)
            .attr('data-gallery', '')
            .appendTo(linksContainer);
        carouselLinks.push({
            href: post.photos[0].original_size.url,
            title: caption
        });
        
    });
    addToGallery(carouselLinks);
}

function addToGallery(carouselLinks){
    shuffle(carouselLinks);
    if(window.gallery){
        gallery.add(carouselLinks);
    } else {
        gallery = blueimp.Gallery(carouselLinks, {
            container: '#blueimp-image-carousel',
            carousel: true
        });
    }
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}



$(function () {
    'use strict';
     
    jQuery.ajax({
        url: 'http://api.tumblr.com/v2/blog/zoeappleseed.tumblr.com/posts/photo?tag=seed&offset=0&api_key=msIByDvkVk3gSr360nq2vmTkKIAvW4gNTB2dUYkvIO9NLwyxNy&jsonp=log_me', 
        dataType: 'jsonp'
    });
    jQuery.ajax({
        url: 'http://api.tumblr.com/v2/blog/zoeappleseed.tumblr.com/posts/photo?tag=seed&offset=20&api_key=msIByDvkVk3gSr360nq2vmTkKIAvW4gNTB2dUYkvIO9NLwyxNy&jsonp=log_me', 
        dataType: 'jsonp'
    });

        

});
