$(document).ready(
    
    function() {
        
        var audio = document.createElement("audio");
        var image = new Image();

        $(".btn").click(function() {
            
            var song = document.getElementById("song").value;
            audio.src = song;
            audio.volume = 1;
            audio.loop = true;
            
            var character = document.getElementById("character").value;
            image.src = character;
            image.onload=function() {
                
                var playPromise = audio.play();
                if (playPromise !== undefined) {
                    playPromise.then(_ => {

                        audio.currentTime = 0;
                        $("#main").fadeOut(200);
                        $("#image").fadeIn(200);
                        $("#img").attr("src",image.src);

                        }) .catch(error => {});

                    }
                }

            });
        
        $("#image").click(function() {
            
            $("#main").fadeIn(200);
            $("#image").fadeOut(200);
            audio.pause();
            
        });
    
});