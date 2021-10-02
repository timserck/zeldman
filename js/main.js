
$( document ).ready(function() {



//ancre
	  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });


//grid



  definegrid = function() {
    var browserWidth = $(window).width(); 
    if (browserWidth >= 1025) 
    {
         
             pageUnits = 'px';
        colUnits = 'px';
        pagewidth = 1002;
        columns = 6;
        columnwidth = 167;
        gutterwidth = 0;
        pagetopmargin = 0;
        rowheight = 32.4;
        gridonload = 'off';

      makehugrid();
    } 
    if (browserWidth <= 1024) 
    {
         
             pageUnits = '%';
        colUnits = '%';
        pagewidth = 100;
        columns = 5;
        columnwidth = 20;
        gutterwidth = 0;
        pagetopmargin = 0;
        rowheight = 32.4;
        gridonload = 'off';
         makehugrid();
    }

          if (browserWidth <= 550) 
    {
            pageUnits = '%';
            colUnits = '%';
      pagewidth = 100;
      columns = 1;
   columnwidth = 100;
        gutterwidth = 0;
        pagetopmargin = 0;
        rowheight = 32.4;
      gridonload = 'off';
        
      makehugrid();
    }
  
  }


   
    definegrid();
    setgridonload();
   
    
    $(window).resize(function() {
    definegrid();
        setgridonresize();
    });


});