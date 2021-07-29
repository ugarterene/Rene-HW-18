function fade() {
    $('.preloader').fadeOut("slow");
    }
    setTimeout(fade, 3000);
    
    $(".searchButton").on("click", function(){
      $(".searchButton").toggleClass("active");
      if ($(".searchButton").hasClass("active")) {
        $(".searchBar").css("height", "100vh");
        $("#searchForm").css("opacity","1");
        $(".searchIcon").removeClass("fa-search").addClass("fa-times");
      }
      else {
        $(".searchBar").css('height', "0vh");
        $("#searchForm").css("opacity","0");
        $(".searchIcon").removeClass("fa-times").addClass("fa-search");
      }
    });
    
    $(".upintheair").click(function(){
      this.animate({height:"200px",width:"300px"},1000  
    )});

