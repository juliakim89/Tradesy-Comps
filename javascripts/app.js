function openInNewTab(url) {
	var win = window.open(url, '_blank');
	win.focus();
}
// function changeAttr(el,attr,attrNew){
// 	$(el).attr(attr,attrNew);
// }
$(function(){
	// var view_all = $('.view-all');
	// var menu = $('#menu');
	// view_all.on('click',function(e){
	// 	e.preventDefault();
	// 	e.stopPropagation();
	// 	var $this = $(this);
	// 	if(menu.hasClass('open')){
	// 		menu.removeClass('open');
	// 	}else{
	// 		menu.addClass('open');
	// 	}
	// });
	// var win = $(window);
	// var product_gallery = $('#product-gallery');
	// var product_gallery_top = product_gallery.offset().top;
	// var product_gallery_left = product_gallery.offset().left;
	// var product_left = product_gallery.offset().left;
	// win.resize(function(){
	// 	product_left = product_gallery.offset().left;
	// 	console.log(product_left);
	// });
	// win.scroll(function(){
	// 	var win_top = win.scrollTop();
	// 	if(win_top>=product_gallery_top){
	// 		product_gallery.addClass('fixed');
	// 		product_gallery.css('left',product_left);
	// 	}else{
	// 		product_gallery.removeClass('fixed');
	// 	}
	// });

	var product_details = $('.product-sub-details'),
	    product_trigger = product_details.find('h3'),
	    product_content = product_details.find('p'),
	    menu = $('#menu')
	    menu_link = menu.find('em'),
	    menu_sub = menu.find('.sub-nav');

	product_trigger.on('click', function(){
		var $this = $(this);
		var content = $this.next('p');
		if(content.hasClass('open')){
			$this.removeClass('active');
			content.removeClass('open');
		}else{
			product_trigger.removeClass('active');
			product_content.removeClass('open');
			$this.addClass('active');
			content.addClass('open');
		}
	});

	menu_link.on('click', function(){
		var $this = $(this);
		var sub = $this.parent().find('.sub-nav');
		if(sub.hasClass('open')){
			$this.removeClass('active');
			sub.removeClass('open');
		}else{
			menu_link.removeClass('active');
			menu_sub.removeClass('open');
			$this.addClass('active');
			sub.addClass('open');
		}
	});

	if($(window).width()>750){
		$('#modal-img').load().attr('src',$('#modal-img').data('src')).addClass('show');
	}

	$(window).resize(function(){
		if($(window).width()>750){
			if($('#modal-img').attr('src')==null){
				$('#modal-img').load().attr('src',$('#modal-img').data('src')).addClass('show');
			}
		}
	});

	// var a = $('a');
	// a.on('click',function(e){
	// 	e.preventDefault();
	// 	e.stopPropagation();
	// 	var $this = $(this),
	// 		par = $this.parent().parent(),
	// 		src = $this.attr('href');
	// 	setTimeout(function(){
	// 		$this.addClass('spinner');
	// 		par.find('div').addClass('no-b');
	// 	}, 10);
	// 	setTimeout(function(){
	// 		// par.addClass('done');
	// 		$this.removeClass('spinner');
	// 		par.find('div').removeClass('no-b');
	// 	}, 250);
	// 	setTimeout(function(){
	// 		openInNewTab(src);
	// 	}, 150);
	// })
});