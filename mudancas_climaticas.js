$(document).ready(function(){
    
    // $("#europe_africa").click(function(){
    //     console.log("entrei")
    //     $('#ModalEuropeAfrica').modal('show');
    // }); 
    // $("#americas").click(function(){
    //     console.log("entrei")
    //     $('#ModalAmericas').modal('show');
    // }); 
    // $("#asia_australia").click(function(){
    //     console.log("entrei")
    //     $('#ModalAsiaAustralia').modal('show');
    // });  
    $("#europe_africa").click(function(){
        console.log("entrei")
        $('#stars_europe_africa').show();
        $('#stars_america').hide();
        $('#stars_asia_oceania').hide();
    }); 
    $("#americas").click(function(){
        console.log("entrei")
        $('#stars_america').show();
        $('#stars_europe_africa').hide();
        $('#stars_asia_oceania').hide();
    }); 
    $("#asia_australia").click(function(){
        console.log("entrei")
        $('#stars_asia_oceania').show();
        $('#stars_europe_africa').hide();
        $('#stars_america').hide();
    });  
    $("#star1").click(function(){
        console.log("entrei")
        $('#ModalKenya').modal('show');
    });  
    // $("#star2").click(function(){
    //     console.log("entrei")
    //     $('#ModalEuropeAfrica').modal('show');
    // }); 
    // $("#star3").click(function(){
    //     console.log("entrei")
    //     $('#ModalEuropeAfrica').modal('show');
    // });  
    $("#star4").click(function(){
        console.log("entrei")
        $('#ModalBrazil').modal('show');
    });  
    $("#star5").click(function(){
        console.log("entrei")
        $('#ModalArtic').modal('show');
    });  
    // $("#star6").click(function(){
    //     console.log("entrei")
    //     $('#ModalAmericas').modal('show');
    // });    
    $("#star7").click(function(){
        console.log("entrei")
        $('#ModalJapan').modal('show');
    });  
    $("#star8").click(function(){
        console.log("entrei")
        $('#ModalPhilippines').modal('show');
    });  
    $("#star9").click(function(){
        console.log("entrei")
        $('#ModalAustralia').modal('show');
    });  

    var currentPlayer;
    //amazon
    let sound_amazon = document.getElementById('beep_amazon')
    let play_amazon = document.getElementById('star4')
    sound_amazon.volume = 0.4

    play_amazon.onclick =
    function() {
            console.log('play_amazon');
            var thissound = sound_amazon;
        if(currentPlayer  && currentPlayer != thissound) {
            currentPlayer.pause(); 
            }
        if (sound_amazon.paused !== true){
            sound_amazon.pause();
            sound_amazon.currentTime = 0
            // audio2.play();
            }
        else{
            sound_amazon.play();
            }
        currentPlayer  = sound_amazon;
    };

    //artic
    let sound_artic = document.getElementById('beep_artic')
    let play_artic = document.getElementById('star5')
    sound_artic.volume = 0.4

    play_artic.onclick =
    function() {
            console.log('play_artic');
        var thissound = sound_artic;
        if(currentPlayer  && currentPlayer != thissound) {
            currentPlayer.pause(); 
            }
        if (sound_artic.paused !== true){
            sound_artic.pause();
            sound_artic.currentTime = 0
            // audio2.play();
            }
        else{
            sound_artic.play();
            }
        currentPlayer  = sound_artic;    
    };

    //philipines
    let sound_philippines = document.getElementById('beep_philippines')
    let play_philippines = document.getElementById('star8')
    sound_philippines.volume = 0.4

    play_philippines.onclick =
    function() {
            console.log('play_philippines');
        var thissound = sound_philippines;
        if(currentPlayer  && currentPlayer != thissound) {
            currentPlayer.pause(); 
            }
        if (sound_philippines.paused !== true){
            sound_philippines.pause();
            sound_philippines.currentTime = 0
            // audio2.play();
            }
        else{
            sound_philippines.play();
            }
        currentPlayer  = sound_philippines;        
    };

     //australia
     let sound_australia = document.getElementById('beep_australia')
     let play_australia = document.getElementById('star9')
     sound_australia.volume = 0.4
 
     play_australia.onclick =
     function() {
             console.log('play_australia');
        var thissound = sound_australia;
        if(currentPlayer  && currentPlayer != thissound) {
            currentPlayer.pause(); 
            }
         if (sound_australia.paused !== true){
             sound_australia.pause();
             sound_australia.currentTime = 0
             // audio2.play();
             }
         else{
             sound_australia.play();
             }
        currentPlayer  = sound_australia;         
     };

    //kenya
    let sound_kenya = document.getElementById('beep_kenya')
    let play_kenya = document.getElementById('star1')
    sound_kenya.volume = 0.4

    play_kenya.onclick =
    function() {
            console.log('play_kenya');
        var thissound = sound_kenya;
        if(currentPlayer  && currentPlayer != thissound) {
            currentPlayer.pause(); 
            }
        if (sound_kenya.paused !== true){
            sound_kenya.pause();
            sound_kenya.currentTime = 0
            // audio2.play();
            }
        else{
            sound_kenya.play();
            }
        currentPlayer  = sound_kenya;       
    };

  });