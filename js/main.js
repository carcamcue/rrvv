
$(function () {

    $(".navbar nav a").on("mouseover", function(){
        var id = this.id;
        $('svg #' + id).css({ stroke: "#0E0F0F" });
    });
    $(".navbar nav a").on("mouseout", function(){
        var id = this.id;
        $('svg #' + id).css({ stroke: "#619996" });
    });

    $(".navbar svg a").on("mouseover", function(){
        var id = $(this).attr("id_link");
        $('svg #' + id).css({ stroke: "#0E0F0F" });
    });
    $(".navbar svg a").on("mouseout", function(){
        var id = $(this).attr("id_link");
        $('svg #' + id).css({ stroke: "#619996" });
    });
    
    /************* 
    * Función efecto Parallax portada 
    *************/
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax");
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.005}% ${50 - (_mouseY - _h) * 0.005}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.008}% ${50 - (_mouseY - _h) * 0.008}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        elem.style.backgroundPosition = x;
    }

});