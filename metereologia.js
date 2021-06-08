$(document).ready(function () {
    var itemsMainDiv = ('.MultiCarousel');
    var itemsDiv = ('.MultiCarousel-inner');
    var itemWidth = "";

    $('.leftLst, .rightLst').click(function () {
        var condition = $(this).hasClass("leftLst");
        if (condition)
            click(0, this);
        else
            click(1, this)
    });

    ResCarouselSize();




    $(window).resize(function () {
        ResCarouselSize();
    });

    //this function define the size of the items
    function ResCarouselSize() {
        var incno = 0;
        var dataItems = ("data-items");
        var itemClass = ('.item');
        var id = 0;
        var btnParentSb = '';
        var itemsSplit = '';
        var sampwidth = $(itemsMainDiv).width();
        var bodyWidth = $('body').width();
        $(itemsDiv).each(function () {
            id = id + 1;
            var itemNumbers = $(this).find(itemClass).length;
            btnParentSb = $(this).parent().attr(dataItems);
            itemsSplit = btnParentSb.split(',');
            $(this).parent().attr("id", "MultiCarousel" + id);


            if (bodyWidth >= 1200) {
                incno = 5;
                itemWidth = sampwidth / incno;
                console.log(incno)
            }
            else if (bodyWidth >= 992) {
                incno = 5;
                itemWidth = sampwidth / incno;
                console.log(incno)
            }
            else if (bodyWidth >= 768) {
                incno = 5;
                itemWidth = sampwidth / incno;
                console.log(incno)
            }
            else {
                incno = 5;
                itemWidth = sampwidth / incno;
                console.log(incno)
            }
            $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
            $(this).find(itemClass).each(function () {
                $(this).outerWidth(itemWidth);
            });

            $(".leftLst").addClass("over");
            $(".rightLst").removeClass("over");

        });
    }


    //this function used to move the items
    function ResCarousel(e, el, s) {
        var leftBtn = ('.leftLst');
        var rightBtn = ('.rightLst');
        var translateXval = '';
        var divStyle = $(el + ' ' + itemsDiv).css('transform');
        var values = divStyle.match(/-?[\d\.]+/g);
        var xds = Math.abs(values[4]);
        if (e == 0) {
            translateXval = parseInt(xds) - parseInt(itemWidth * s);
            $(el + ' ' + rightBtn).removeClass("over");

            if (translateXval <= itemWidth / 2) {
                translateXval = 0;
                $(el + ' ' + leftBtn).addClass("over");
            }
        }
        else if (e == 1) {
            var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
            translateXval = parseInt(xds) + parseInt(itemWidth * s);
            $(el + ' ' + leftBtn).removeClass("over");

            if (translateXval >= itemsCondition - itemWidth / 2) {
                translateXval = itemsCondition;
                $(el + ' ' + rightBtn).addClass("over");
            }
        }
        $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
    }

    //It is used to get some elements from btn
    function click(ell, ee) {
        var Parent = "#" + $(ee).parent().attr("id");
        var slide = $(Parent).attr("data-slide");
        ResCarousel(ell, Parent, slide);
    }


    var currentPlayer;
    //chuva
    let sound_chuva = document.getElementById('beep_chuva')
    let play_chuva = document.getElementById('chuvaaguaceiros')
    sound_chuva.volume = 0.4

    play_chuva.onclick =
    function() {
            console.log('play_chuva');
        var thissound = sound_chuva;
        if(currentPlayer  && currentPlayer != thissound) {
            currentPlayer.pause(); 
            }
        if (sound_chuva.paused !== true){
            sound_chuva.pause();
            sound_chuva.currentTime = 0
            // audio2.play();
            }
        else{
            sound_chuva.play();
            }
        currentPlayer  = sound_chuva;    
    };

    //partly_cloudy
    let sound_partly_cloudy = document.getElementById('beep_partly_cloudy')
    let play_partly_cloudy = document.getElementById('partly_cloudy')
    sound_partly_cloudy.volume = 0.4

    play_partly_cloudy.onclick =
    function() {
            console.log('play_partly_cloudy');
        var thissound = sound_partly_cloudy;
        if(currentPlayer  && currentPlayer != thissound) {
            currentPlayer.pause(); 
            }
        if (sound_partly_cloudy.paused !== true){
            sound_partly_cloudy.pause();
            sound_partly_cloudy.currentTime = 0
            // audio2.play();
            }
        else{
            sound_partly_cloudy.play();
            }
        currentPlayer  = sound_partly_cloudy;    
    };

    //trovoada
    let sound_trovoada = document.getElementById('beep_trovao')
    let play_trovoada = document.getElementById('trovoada')
    sound_trovoada.volume = 0.4

    play_trovoada.onclick =
    function() {
            console.log('play_trovoada');
        var thissound = sound_trovoada;
        if(currentPlayer  && currentPlayer != thissound) {
            currentPlayer.pause(); 
            }
        if (sound_trovoada.paused !== true){
            sound_trovoada.pause();
            sound_trovoada.currentTime = 0
            // audio2.play();
            }
        else{
            sound_trovoada.play();
            }
        currentPlayer  = sound_trovoada;    
    };

    
    //neve
    let sound_neve = document.getElementById('beep_neve')
    let play_neve = document.getElementById('neve')
    sound_neve.volume = 0.4

    play_neve.onclick =
    function() {
            console.log('play_neve');
        var thissound = sound_neve;
        if(currentPlayer  && currentPlayer != thissound) {
            currentPlayer.pause(); 
            }
        if (sound_neve.paused !== true){
            sound_neve.pause();
            sound_neve.currentTime = 0
            // audio2.play();
            }
        else{
            sound_neve.play();
            }
        currentPlayer  = sound_neve;    
    };

     
    //ceulimpo
    let sound_ceulimpo = document.getElementById('beep_ceulimpo')
    let play_ceulimpo = document.getElementById('ceulimpo')
    sound_ceulimpo.volume = 0.4

    play_ceulimpo.onclick =
    function() {
            console.log('play_ceulimpo');
        var thissound = sound_ceulimpo;
        if(currentPlayer  && currentPlayer != thissound) {
            currentPlayer.pause(); 
            }
        if (sound_ceulimpo.paused !== true){
            sound_ceulimpo.pause();
            sound_ceulimpo.currentTime = 0
            // audio2.play();
            }
        else{
            sound_ceulimpo.play();
            }
        currentPlayer  = sound_ceulimpo;    
    };

     //ventoso
     let sound_ventoso = document.getElementById('beep_vento')
     let play_ventoso = document.getElementById('ventoso')
     sound_ventoso.volume = 0.4
 
     play_ventoso.onclick =
     function() {
             console.log('play_ventoso');
         var thissound = sound_ventoso;
         if(currentPlayer  && currentPlayer != thissound) {
             currentPlayer.pause(); 
             }
         if (sound_ventoso.paused !== true){
             sound_ventoso.pause();
             sound_ventoso.currentTime = 0
             // audio2.play();
             }
         else{
             sound_ventoso.play();
             }
         currentPlayer  = sound_ventoso;    
     };

      //ceupouconoblado
      let sound_ceupouconoblado = document.getElementById('beep_ceupouconoblado')
      let play_ceupouconoblado = document.getElementById('ceupouconoblado')
      sound_ceupouconoblado.volume = 0.4
  
      play_ceupouconoblado.onclick =
      function() {
              console.log('play_ceupouconoblado');
          var thissound = sound_ceupouconoblado;
          if(currentPlayer  && currentPlayer != thissound) {
              currentPlayer.pause(); 
              }
          if (sound_ceupouconoblado.paused !== true){
              sound_ceupouconoblado.pause();
              sound_ceupouconoblado.currentTime = 0
              // audio2.play();
              }
          else{
              sound_ceupouconoblado.play();
              }
          currentPlayer  = sound_ceupouconoblado;    
      };
 

});