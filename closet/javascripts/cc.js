$(function(){
  $('#admin-toggle').on('click', function() {
      if($(this).hasClass('admin')) {
        $(this).removeClass('admin').text('Show Seller');
        $('#profile-actions').removeClass('hide');
        $('#profile-actions-seller').addClass('hide');
        $('#closet-header').removeClass('admin');
        $('#seller-nav').addClass('hide');
      }else{
        $(this).addClass('admin').text('Show Buyer');
        $('#profile-actions').addClass('hide');
        $('#profile-actions-seller').removeClass('hide');
        $('#closet-header').addClass('admin');
        $('#seller-nav').removeClass('hide');
      }
    });

  $('#hero-toggle').on('click', function() {
    var src = $('#user').attr('src'),
      defaultSrc = 'images/default-user.png';
      if($(this).hasClass('admin')){
        $(this).removeClass('admin');
        $('#closet-header').removeClass('default');
        $('#user').attr('src',src);
      }else{
        $(this).addClass('admin');
        $('#closet-header').addClass('default');
        $('#user').attr('src',defaultSrc);
      }
    });

  $('#toggle-chg').on('click', function() {
      if($(this).text()=='Close'){
        $(this).text('Change Profile Images');
        $('.chg').removeClass('s');
        // $('#editProfile').addClass('hide');
        $('.closet-wrapper').removeClass('out');
        // $('body').removeClass('out');
      }else{
        $(this).text('Close');
        setTimeout(function(){
          $('.chg').addClass('s');
          $('.closet-wrapper').addClass('out');
        }, 125);
        // $('#editProfile').removeClass('hide');
        // $('body').addClass('out');
        // $('html,body').animate({
        //   scrollTop: $('#editProfile').offset().top - 100
        // }, 500);
      }
      return false;
    });

  $('.chg').on('click', function() {
    $('#modal-wrap').removeClass('hide');
  });

  $('#cls').on('click', function() {
    $('#modal-wrap').addClass('hide');
  });

  $('#profile-follow').on('click', function(){
    $(this).toggleClass('active').text('following');
  });

  // var brands_hidden = $('#brands .hide'),
  //  brands_hidden_num = brands_hidden.length,
  //  b = 0;

  // function showBrands() {
  //  for(b; b < brands_hidden_num; b++) {
  //    setTimeout(function() {
  //      console.log($(brands_hidden[b]));
  //      $(brands_hidden[b]).addClass('show');
  //    }, 150);
  //    // $(brands_hidden[b]).addClass('show');
  //  }
  // }

  $('#brand-toggle').on('click', function() {
    if($(this).hasClass('show')){
      $(this).removeClass('show').text('Show all');
      $('#brands .hide').removeClass('show');
    }else{
      $(this).addClass('show').text('Hide all');
      $('#brands .hide').each(function(i) {
        var that = this;
        setTimeout(function() {
          $(that).fadeIn().addClass('show');
        }, 15 * i);
        // $(this).addClass('show');
      });
      // showBrands();
    }
    return false;
  });

  $('.filter-more').on('click', function() {
    if($(this).hasClass('show')){
      $('#filter-list button.show').each(function(i) {
        var that = this;
        setTimeout(function() {
          $(that).fadeIn().removeClass('show');
          $(that).fadeIn().addClass('hide');
        });
      });
      $('.filter-more').removeClass('show').text('Show 132 More');
    } else {
      $(this).addClass('show').text('Hide');
      $('#filter-list .hide').each(function(i) {
        var that = this;
        setTimeout(function() {
          $(that).fadeIn().removeClass('hide');
          $(that).fadeIn().addClass('show');
        }, 10 * i);
      });
    }
    return false;
  });

  $('#brand-cls').on('click', function() {
    $('#brand-toggle').removeClass('show').text('Show all');
    $('#brands .hide').removeClass('show');
  });

  var featureHTML = '<span class="tag featured">Featured</span>';

  $('body').on('click', '.feature-this', function() {
    var featured = $('#featured'),
        featured_num = featured.find('.product').length,
        id = $(this).data('id'),
        content_all = $('#'+id)[0].outerHTML,
        content = $('#'+id).html(),
        empty_st = '<div class="cover">Adding to featured&hellip;</div>';

      $('#'+id).append(empty_st);
      setTimeout(function() {
        $('#'+id).find('.cover').remove();
        $('#'+id).find('.feature-this').removeClass('feature-this').addClass('unfeature-this').text('Unfeature');
        featured_num++;
      }, 750);

      setTimeout(function() {
        if(featured_num < 4){
          featured.find('.empty-set').fadeOut().addClass('hide');
          featured.append(content_all);
        }
      }, 1000);

  });

  $('body').on('click', '.unfeature-this', function() {
    var featured = $('#featured'),
        featured_num = featured.find('.product').length,
        id = $(this).data('id'),
        content_all = $('#'+id)[0].outerHTML,
        content = $('#'+id).html(),
        empty_st = '<div class="cover">Removing from featured&hellip;</div>';

      $('#'+id).append(empty_st);
      setTimeout(function() {
        $('#'+id).find('.cover').remove();
        $('#'+id).find('.unfeature-this').removeClass('unfeature-this').addClass('feature-this').text('Feature');
        featured.find('#'+id).remove();
        featured_num--;
        if(featured_num < 1){
          featured.find('.empty-set').fadeIn().removeClass('hide');
        }
      }, 750);

  });

  $('.ctls').on('click', function() {
    if($(this).parent().hasClass('showing')){
      $(this).text('Manage');
      $(this).parent().removeClass('showing');
    }else{
      $('.ctls').text('Manage');
      $('.product').removeClass('showing');
      $(this).text('Close');
      $(this).parent().addClass('showing');
    }
  });

  $(document).on('click', function(e) {
    if(!$(e.target).closest('.product').length){
      $('.ctls').text('Manage');
      $('.product').removeClass('showing');
    }
  });

  if(window.location.hash){
    $('.product').removeClass('s');
    $('.product .analytics').hide();
    $('.product .ctls').hide();
    $('.sale').removeClass('hide');
    $('.brand.hide:first').removeClass('hide');
    $('.empty').hide();
    $('.chg').hide();
    $('#closet-header').removeClass('admin');
    $('#profile-actions-seller').hide();
    $('#profile-actions').removeClass('hide');
    $('#seller-nav').addClass('hide');
  }

});

$(function(){
    var product = $('.product'),
      product_img = $('.has-alt-img'),
      // want = product.find('span.want.action');
      want = product.find('span.wanted'),
      drops = $('.drops nav')
      dropLinks = drops.find('a'),
      dropsClose = $('.drops em'),

      hasDrops = $('.has-drop'),
      hasDropsOpen = hasDrops.find('span:first'),
      hasDropLinks = hasDrops.find('a'),
      hasDropsClose = hasDrops.find('em'),

      filters = $('#filters'),
      toggleFilters = $('#filterssss'),
      filterList = $('#filter-list'),
      filterListPills = filterList.find('button'),

      // sellerNav = $('#seller-nav'),
      // sellerNavHeight = sellerNav.height(),
      // sellerNavTop = sellerNav.offset().top;

    drops.on('click', function() {
      drops.parent().parent().removeClass('show');
      if(!$(this).parent().parent().hasClass('show')){
        $(this).parent().parent().addClass('show');
      }
    });

    hasDropsOpen.on('click', function() {
      // hasDrops.removeClass('showing');
      if(!!$(this).parent().hasClass('showing')){
        $(this).parent().removeClass('showing');
      }else{
        $(this).parent().addClass('showing');
      }
    });

    filterListPills.on('click', function() {
      // if((!!filters.length) && (!$(this).hasClass('atv'))){
      //   filters.append('<button class="tag applied">'+$(this).text()+'</button>');
      //   $(this).addClass('atv').prop('disabled',true);
      // }
      if(!$(this).hasClass('atv')){
        // filters.append('<button class="tag applied">'+$(this).text()+'</button>');
        $(this).addClass('atv');
      }else{
        $(this).removeClass('atv');
      }
    });

     dropsClose.on('click', function() {
      if(!!$(this).parent().parent().hasClass('show')){
        $(this).parent().parent().removeClass('show');
      }else{
        drops.parent().parent().removeClass('show');
        $(this).parent().parent().addClass('show');
      }
    });

    // hide drops if click is anywhere outside a .drops container
    $(document).on('click', function(e) {
      if(!$(e.target).closest('.drops').length){
        drops.parent().parent().removeClass('show');
      }
      if(!$(e.target).closest('.has-drop').length){
        $('.has-drop').removeClass('showing');
      }
      if(!$(e.target).closest('#closet-head').length){
        $('.chg').removeClass('s');
        $('#toggle-chg').text('Change Profile Images');
        $('.closet-wrapper').removeClass('out');
        $('body').removeClass('out');
      }
    });

    toggleFilters.on('click', function() {
      if($(this).hasClass('showing')){
        filterList.removeClass('view');
        $(this).removeClass('showing').text('Show filters');
      }else{
        filterList.addClass('view');
        $(this).addClass('showing').text('Hide filters');
      }
    });

    $('#filter-cls').on('click', function() {
      filterList.removeClass('view');
      toggleFilters.removeClass('showing').text('Show filters');
    });

    $('#toggle-chg').on('click', function() {
      if($(this).text()=='Close'){
        $(this).text('Change Profile Images');
        $('.chg').removeClass('s');
        // $('#editProfile').addClass('hide');
        $('.closet-wrapper').removeClass('out');
        // $('body').removeClass('out');
      }else{
        $(this).text('Close');
        setTimeout(function(){
          $('.chg').addClass('s');
          $('.closet-wrapper').addClass('out');
        }, 125);
        // $('#editProfile').removeClass('hide');
        // $('body').addClass('out');
        // $('html,body').animate({
        //   scrollTop: $('#editProfile').offset().top - 100
        // }, 500);
      }
      return false;
    });

  });