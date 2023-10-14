$(function(){

	$(".openMenu").click(function () {
		
		$("body").addClass("overflowH");
		$(".menuMob").fadeIn();
		
	});
	

	$(".closeX,.BgClose,.menuMob .menuContent .menuRes li .subLinks a").click(function () {
		
		$("body").removeClass("overflowH");
		$(".menuMob").fadeOut();
		
	});
	
	$(".menuMob .menuContent .menuRes li a").click(function () {
		
		$(this).next().slideToggle(500);
		$(".menuMob .menuContent .menuRes li .subLinks").not($(this).next()).slideUp(500);
		
	});


	$(".header .menuHeader .menu li .openReserv").click(function () {
		
		$(".menu li .Reservation").slideToggle();
		
	});
	
	
	$('body,html').on('click', function(e) {
		var container = $(".menu li .openReserv,.menu li .Reservation,.menu li .Reservation *"),
		Sub = $(".menu li .Reservation");
		

	    if( !$(e.target).is(container)  ){
	        Sub.slideUp();
	    }
	

	});
	
	
	$(".openShare").click(function () {
		
		$(this).siblings().slideToggle();
		
	});
	
	$('body,html').on('click', function(e) {
		var container = $(".openShare,.listSocial"),
		Sub = $(".listSocial");
		

	    if( !$(e.target).is(container)  ){
	        Sub.slideUp();
	    }
	

	});
	
	

	$( ".datepicker" ).datepicker();
	

	$('.the-slider-inner').bxSlider({
		useCSS: false,
		auto: true,
		controls: true,
		pager: true,
		autoHover: true,
		responsive: true,
		nextSelector: '#slider-next',
		prevSelector: '#slider-prev',
		nextText: '<i class="fa fa-angle-right"></i>',
		prevText: '<i class="fa fa-angle-left"></i>'
	});
	
	
	
	
	  var OwlClinics = $('#OwlClinics');
	 
	  OwlClinics.owlCarousel({
	      
	      items : 6, //10 items above 1000px browser width
	      itemsDesktop : [1200,4], //5 items between 1000px and 901px
	      itemsDesktopSmall : [979,3], // betweem 900px and 601px
	      itemsTablet: [768,2], //2 items between 600 and 0
	      itemsMobile : [479,1],// itemsMobile disabled - inherit from itemsTablet option
	      slideSpeed : 500,
	      paginationSpeed : 400,
	      pagination:false,
	      navigation:true,
	      autoPlay:true,
	      navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
	  });
	
		
	
	  var OwlBlog = $('#OwlBlog');
	 
	  OwlBlog.owlCarousel({
	      
	      items : 3, //10 items above 1000px browser width
	      itemsDesktop : [1200,3], //5 items between 1000px and 901px
	      itemsDesktopSmall : [979,2], // betweem 900px and 601px
	      itemsTablet: [768,2], //2 items between 600 and 0
	      itemsMobile : [479,1],// itemsMobile disabled - inherit from itemsTablet option
	      slideSpeed : 500,
	      paginationSpeed : 400,
	      pagination:false,
	      navigation:true,
	      autoPlay:true,
	      navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
	  });
	
		

	  var OwlClients = $('#OwlClients');
	 
	  OwlClients.owlCarousel({
	      
	      items : 4, //10 items above 1000px browser width
	      itemsDesktop : [1200,3], //5 items between 1000px and 901px
	      itemsDesktopSmall : [979,3], // betweem 900px and 601px
	      itemsTablet: [768,2], //2 items between 600 and 0
	      itemsMobile : [479,1],// itemsMobile disabled - inherit from itemsTablet option
	      slideSpeed : 500,
	      paginationSpeed : 400,
	      pagination:false,
	      navigation:false,
	      autoPlay:true,
	  });
	  
	
	$(".footer .map .mapTitle").click(function () {
		
		$(".footer .map").toggleClass("active");
		
		
	});
	
	
	/****** Start accordion ******/
	
	$(".accordion.active .accordion-content").css("display","block");
	
	$(".accordion .accordion-title").click(function () {
		
		var accordId = $(this).parent().parent().attr("id");
				
		$(this).next().slideToggle(500);
		
		$("#"+accordId + " .accordion .accordion-content").not($(this).next()).slideUp(500);
		
		$(this).parent().toggleClass("active").siblings().removeClass("active");
				
	});
	
	/****** End accordion ******/

	  var OwlImages = $('#OwlImages');
	 
	  OwlImages.owlCarousel({
	      
	      items : 1, //10 items above 1000px browser width
	      itemsDesktop : [1200,1], //5 items between 1000px and 901px
	      itemsDesktopSmall : [979,1], // betweem 900px and 601px
	      itemsTablet: [768,1], //2 items between 600 and 0
	      itemsMobile : [479,1],// itemsMobile disabled - inherit from itemsTablet option
	      slideSpeed : 500,
	      paginationSpeed : 400,
	      pagination:false,
	      navigation:true,
	      autoPlay:true,
	      navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
	  });
	
	/* WOW Js */
    new WOW().init();
	
	
	
	
	
	
});







        var initPhotoSwipeFromDOM = function(gallerySelector) {
        
            // parse slide data (url, title, size ...) from DOM elements 
            // (children of gallerySelector)
            var parseThumbnailElements = function(el) {
                var thumbElements = el.childNodes,
                    numNodes = thumbElements.length,
                    items = [],
                    figureEl,
                    linkEl,
                    size,
                    item;
        
                for(var i = 0; i < numNodes; i++) {
        
                    figureEl = thumbElements[i]; // <figure> element
        
                    // include only element nodes 
                    if(figureEl.nodeType !== 1) {
                        continue;
                    }
        
                    linkEl = figureEl.children[0]; // <a> element
        
                    size = linkEl.getAttribute('data-size').split('x');
        
                    // create slide object
                    item = {
                        src: linkEl.getAttribute('href'),
                        w: parseInt(size[0], 10),
                        h: parseInt(size[1], 10)
                    };
        
        
        
                    if(figureEl.children.length > 1) {
                        // <figcaption> content
                        item.title = figureEl.children[1].innerHTML; 
                    }
        
                    if(linkEl.children.length > 0) {
                        // <img> thumbnail element, retrieving thumbnail url
                        item.msrc = linkEl.children[0].getAttribute('src');
                    } 
        
                    item.el = figureEl; // save link to element for getThumbBoundsFn
                    items.push(item);
                }
        
                return items;
            };
        
            // find nearest parent element
            var closest = function closest(el, fn) {
                return el && ( fn(el) ? el : closest(el.parentNode, fn) );
            };
        
            // triggers when user clicks on thumbnail
            var onThumbnailsClick = function(e) {
                e = e || window.event;
                e.preventDefault ? e.preventDefault() : e.returnValue = false;
        
                var eTarget = e.target || e.srcElement;
        
                // find root element of slide
                var clickedListItem = closest(eTarget, function(el) {
                    return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
                });
        
                if(!clickedListItem) {
                    return;
                }
        
                // find index of clicked item by looping through all child nodes
                // alternatively, you may define index via data- attribute
                var clickedGallery = clickedListItem.parentNode,
                    childNodes = clickedListItem.parentNode.childNodes,
                    numChildNodes = childNodes.length,
                    nodeIndex = 0,
                    index;
        
                for (var i = 0; i < numChildNodes; i++) {
                    if(childNodes[i].nodeType !== 1) { 
                        continue; 
                    }
        
                    if(childNodes[i] === clickedListItem) {
                        index = nodeIndex;
                        break;
                    }
                    nodeIndex++;
                }
        
        
        
                if(index >= 0) {
                    // open PhotoSwipe if valid index found
                    openPhotoSwipe( index, clickedGallery );
                }
                return false;
            };
        
            // parse picture index and gallery index from URL (#&pid=1&gid=2)
            var photoswipeParseHash = function() {
                var hash = window.location.hash.substring(1),
                params = {};
        
                if(hash.length < 5) {
                    return params;
                }
        
                var vars = hash.split('&');
                for (var i = 0; i < vars.length; i++) {
                    if(!vars[i]) {
                        continue;
                    }
                    var pair = vars[i].split('=');  
                    if(pair.length < 2) {
                        continue;
                    }           
                    params[pair[0]] = pair[1];
                }
        
                if(params.gid) {
                    params.gid = parseInt(params.gid, 10);
                }
        
                return params;
            };
        
            var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
                var pswpElement = document.querySelectorAll('.pswp')[0],
                    gallery,
                    options,
                    items;
        
                items = parseThumbnailElements(galleryElement);
        
                // define options (if needed)
                options = {
        
                    // define gallery index (for URL)
                    galleryUID: galleryElement.getAttribute('data-pswp-uid'),
        
                    getThumbBoundsFn: function(index) {
                        // See Options -> getThumbBoundsFn section of documentation for more info
                        var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                            pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                            rect = thumbnail.getBoundingClientRect(); 
        
                        return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
                    }
        
                };
        
                // PhotoSwipe opened from URL
                if(fromURL) {
                    if(options.galleryPIDs) {
                        // parse real index when custom PIDs are used 
                        // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                        for(var j = 0; j < items.length; j++) {
                            if(items[j].pid == index) {
                                options.index = j;
                                break;
                            }
                        }
                    } else {
                        // in URL indexes start from 1
                        options.index = parseInt(index, 10) - 1;
                    }
                } else {
                    options.index = parseInt(index, 10);
                }
        
                // exit if index not found
                if( isNaN(options.index) ) {
                    return;
                }
        
                if(disableAnimation) {
                    options.showAnimationDuration = 0;
                }
        
                // Pass data to PhotoSwipe and initialize it
                gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
                gallery.init();
            };
        
            // loop through all gallery elements and bind events
            var galleryElements = document.querySelectorAll( gallerySelector );
        
            for(var i = 0, l = galleryElements.length; i < l; i++) {
                galleryElements[i].setAttribute('data-pswp-uid', i+1);
                galleryElements[i].onclick = onThumbnailsClick;
            }
        
            // Parse URL and open gallery if it contains #&pid=3&gid=1
            var hashData = photoswipeParseHash();
            if(hashData.pid && hashData.gid) {
                openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
            }
        };
        
        // execute above function
        initPhotoSwipeFromDOM('.my-gallery');
        













