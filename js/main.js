

window.addEventListener("DOMContentLoaded",
    function () {
        
        startSS();

        var bbn = document.querySelectorAll(".cmbtn");
        for (var x of bbn) {
            x.onmouseover = function () {
                this.classList.add("on");
                this.classList.remove("off");
            };
            x.onmouseout = function () {
                this.classList.add("off");
                this.classList.remove("on");
            }; 
        } 


				
        var rellax = new Rellax('.rellax', {
            speed: -2
        });
				
        var rellax2 = new Rellax('.rellax2', {
            speed: 5
        });
				
        var rellax3 = new Rellax('.rellax3', {
            speed: -3
        });

				
        $(".gdsec>ul").draggable({
            axis: "x" 
        });

        var gw = $(".gdsec").width();

        $(".gdsec").on("mouseup mouseleave", function () {
            var tgpos = $(".gdsec>ul").position().left;
            if (
                (tgpos < -gw * 0.1 && tgpos > -gw * 0.5) ||
                (tgpos < -gw * 1.5 && tgpos > -gw * 1.9)
            ) {
                $(".gdsec>ul").animate({
                    left: "-100%"
                }, 800);
            }
						
            else if (
                tgpos < -gw * 1.1 && tgpos > -gw * 1.5
            ) {
                $(".gdsec>ul").animate({
                    left: "-200%"
                }, 800);
            } 
						
            else if (
                tgpos < -gw * 0.5 && tgpos > -gw * 0.9
            ) {
                $(".gdsec>ul").animate({
                    left: "0%"
                }, 800);
            } 
						
            else if (
                tgpos > 0
            ) {
                $(".gdsec>ul").animate({
                    left: "0%"
                }, 400);
            }
						
            else if (
                tgpos < -2 * gw
            ) {
                $(".gdsec>ul").animate({
                    left: "-200%"
                }, 400);
            }
						
            else {
                var num = Math.round(Math.abs(tgpos / gw));
								
                $(".gdsec>ul").animate({
                    left: (num * -100) + "%"
										
                }, 400);
            }
        }); 
				
        tgpos[0] = $("#blog").offset().top;
        tgpos[0] = tgpos[0] - winH / 2
    });
    




var winH = $(window).height();
var tgpos = [];
$(window).scroll(function () {
    var scTop = $(this).scrollTop();
    if (scTop > tgpos[0] &&
        scTop < tgpos[0] + 200) {

        $(".bb2 .mtxt2").css({
            left: (720 - 50) + "px"
        });
        $(".bb3 .mtxt2").css({
            left: (0 - 50) + "px"
        });

        $(".bb2 .mtxt1").css({
            right: (720 - 50) + "px"
        });
        $(".bb1 .mtxt1").css({
            right: (0 - 50) + "px"
        });

    } 
    else if (scTop > tgpos[0] + 200 &&
        scTop < tgpos[0] + 400) {

        $(".bb2 .mtxt2").css({
            left: (720 - 100) + "px"
        });
        $(".bb3 .mtxt2").css({
            left: (0 - 100) + "px"
        });

        $(".bb2 .mtxt1").css({
            right: (720 - 100) + "px"
        });
        $(".bb1 .mtxt1").css({
            right: (0 - 100) + "px"
        });

    } 
    else if (scTop > tgpos[0] + 400 &&
        scTop < tgpos[0] + 600) {

        $(".bb2 .mtxt2").css({
            left: (720 - 150) + "px"
        });
        $(".bb3 .mtxt2").css({
            left: (0 - 150) + "px"
        });

        $(".bb2 .mtxt1").css({
            right: (720 - 150) + "px"
        });
        $(".bb1 .mtxt1").css({
            right: (0 - 150) + "px"
        });

    } 
    else if (scTop > tgpos[0] + 600 &&
        scTop < tgpos[0] + 800) {

        $(".bb2 .mtxt2").css({
            left: (720 - 200) + "px"
        });
        $(".bb3 .mtxt2").css({
            left: (0 - 200) + "px"
        });

        $(".bb2 .mtxt1").css({
            right: (720 - 200) + "px"
        });
        $(".bb1 .mtxt1").css({
            right: (0 - 200) + "px"
        });

    }
    else {
        $(".bb2 .mtxt2").css({
            left: (720) + "px"
        });
        $(".bb3 .mtxt2").css({
            left: (0) + "px"
        });

        $(".bb2 .mtxt1").css({
            right: (720) + "px"
        });
        $(".bb1 .mtxt1").css({
            right: (0) + "px"
        });

    }
    
    if(scTop < 100){
        $(".mtit1").css({left:"30%"});
        $(".mtit2").css({left:"50%"});
    }
    else if(scTop > 100 && scTop < 200){
        $(".mtit1").css({left:"10%"});
        $(".mtit2").css({left:"20%"});
    }
    else if(scTop > 200 && scTop < 300){
        $(".mtit1").css({left:"-20%"});
        $(".mtit2").css({left:"-10%"});
    }
    else if(scTop > 300 && scTop < 400){
        $(".mtit1").css({left:"-50%"});
        $(".mtit2").css({left:"-30%"});
    }
    else if(scTop > 400 && scTop < 500){
        $(".mtit1").css({left:"-80%"});
        $(".mtit2").css({left:"-50%"});
    }
    else if(scTop > 500 && scTop < 600){
        $(".mtit1").css({left:"-120%"});
        $(".mtit2").css({left:"-100%"});
    }
		

});