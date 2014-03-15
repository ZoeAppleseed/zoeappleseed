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

    if(window.gallery){
        gallery.add(carouselLinks);
    } else {
        gallery = blueimp.Gallery(carouselLinks, {
            container: '#blueimp-image-carousel',
            carousel: true
        });
    }
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
