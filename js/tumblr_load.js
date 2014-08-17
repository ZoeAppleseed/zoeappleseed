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

function loaded(data){
   populate(data.response)
}

function bio(data){
	var desc = data.response.blog.description
	var heartIndex = desc.indexOf('♥')
	$('.bio').html(desc.slice(0,heartIndex+1))
}

$(function () {
    'use strict';
     
    jQuery.ajax({
        url: 'http://api.tumblr.com/v2/blog/zoeappleseed.tumblr.com/posts/photo?tag=seed&offset=0&api_key=msIByDvkVk3gSr360nq2vmTkKIAvW4gNTB2dUYkvIO9NLwyxNy&jsonp=loaded', 
        dataType: 'jsonp'
    });
    
    jQuery.ajax({
    	url: 'http://api.tumblr.com/v2/blog/zoeappleseed.tumblr.com/info/?api_key=msIByDvkVk3gSr360nq2vmTkKIAvW4gNTB2dUYkvIO9NLwyxNy&jsonp=bio',
    	dataType: 'jsonp'
    })
});
