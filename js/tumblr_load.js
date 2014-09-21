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
var i = 0;
function loaded(data){
   window.posts = window.posts || []
   var seeds = _.filter(data.response.posts,function(post){
      return _.contains(post.tags,'seed') 
    })
   window.posts.push.apply(window.posts,seeds)
   i++;
   if(i>6){ populate() }
   

}

$(function () {
    'use strict';
     
    jQuery.ajax({
        url: 'http://api.tumblr.com/v2/blog/zoeappleseed.tumblr.com/posts/photo?offset=0&api_key=msIByDvkVk3gSr360nq2vmTkKIAvW4gNTB2dUYkvIO9NLwyxNy&jsonp=loaded', 
        dataType: 'jsonp'
    });
    
    jQuery.ajax({
        url: 'http://api.tumblr.com/v2/blog/zoeappleseed.tumblr.com/posts/photo?offset=20&api_key=msIByDvkVk3gSr360nq2vmTkKIAvW4gNTB2dUYkvIO9NLwyxNy&jsonp=loaded', 
        dataType: 'jsonp'
    });

    jQuery.ajax({
        url: 'http://api.tumblr.com/v2/blog/zoeappleseed.tumblr.com/posts/photo?offset=40&api_key=msIByDvkVk3gSr360nq2vmTkKIAvW4gNTB2dUYkvIO9NLwyxNy&jsonp=loaded', 
        dataType: 'jsonp'
    });
    jQuery.ajax({
        url: 'http://api.tumblr.com/v2/blog/zoeappleseed.tumblr.com/posts/photo?offset=60&api_key=msIByDvkVk3gSr360nq2vmTkKIAvW4gNTB2dUYkvIO9NLwyxNy&jsonp=loaded', 
        dataType: 'jsonp'
    });
    jQuery.ajax({
        url: 'http://api.tumblr.com/v2/blog/zoeappleseed.tumblr.com/posts/photo?offset=80&api_key=msIByDvkVk3gSr360nq2vmTkKIAvW4gNTB2dUYkvIO9NLwyxNy&jsonp=loaded', 
        dataType: 'jsonp'
    });
    jQuery.ajax({
        url: 'http://api.tumblr.com/v2/blog/zoeappleseed.tumblr.com/posts/photo?offset=100&api_key=msIByDvkVk3gSr360nq2vmTkKIAvW4gNTB2dUYkvIO9NLwyxNy&jsonp=loaded', 
        dataType: 'jsonp'
    });
    jQuery.ajax({
        url: 'http://api.tumblr.com/v2/blog/zoeappleseed.tumblr.com/posts/photo?offset=120&api_key=msIByDvkVk3gSr360nq2vmTkKIAvW4gNTB2dUYkvIO9NLwyxNy&jsonp=loaded', 
        dataType: 'jsonp'
    });
});
