function wantToWanted(e){
  setTimeout(function(){
    $(e).text('Wanted');
  }, 500);
}
function wantedToWant(e){
  setTimeout(function(){
    $(e).text('Want');
  }, 500);
}

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
    filterListPills = filterList.find('button');

  product_img.hover(function(){
    var img = $(this).find('img'),
      src = img.src,
      alt_img = img.data('src');
    img.attr('src',alt_img);
  }, function(){
    var img = $(this).find('img'),
      src = img.data('o-src');
    img.attr('src',src);
  });

  want.on('click', function(){
    // var wanted = $(this).next('.wanted'),
    //   wanted_text = wanted.text().replace('Wanted by ','');
    //   parseInt(wanted_text,10);
      // console.log(wanted_text, typeof wanted_text);

      if($(this).hasClass('no-inc')){
        return;
      }

      var wantedNum = $(this).data('want');
      parseInt(wantedNum,10);
      // console.log(typeof wantedNum);

      if($(this).hasClass('i-added')){
        $(this).removeClass('i-added');
        wantedNum = wantedNum;
      }else{
        $(this).addClass('i-added');
        wantedNum = wantedNum + 1;
      }

      $(this).attr('data-want',wantedNum);

    // if($(this).text()=='Wanted'){
    //   $(this).text('Removing...');
    //   wantedToWant($(this));
    //   wanted_text--;
    //   if(wanted_text===0){
    //     wanted.text('');
    //   }else{
    //     wanted.text('Wanted by '+ wanted_text);
    //   }
    // }else{
    //   $(this).text('Wanting...');
    //   wantToWanted($(this));
    //   wanted_text++;
    //   wanted.text('Wanted by '+ wanted_text);
    // }


  });

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

  // hasDropsClose.on('click', function() {
  //   if(!!$(this).parent().hasClass('showing')){
  //     $(this).parent().removeClass('showing');
  //   }else{
  //     hasDrops.parent().removeClass('showing');
  //     $(this).parent().addClass('showing');
  //   }
  // });

  // dropLinks.on('click', function(e) {
  //   if(!!filters.length){
  //     filters.append('<button class="tag applied">'+$(this).text()+'</button>');
  //     $(this).parent().parent().parent().parent().removeClass('show');
  //     e.stopPropagation();
  //   }
  // });

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

});