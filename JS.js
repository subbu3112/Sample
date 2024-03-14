    $(".toggle-btn").click(function(){
        $(this).toggleClass("fa-times");
        $(".nav-menus").toggleClass("active");
    });


    /* Courses */
$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );
  

  /* Footer */
  /* Code by CodingTuting.Com */
function footerToggle(footerBtn) {
  $(footerBtn).toggleClass("btnActive");
  $(footerBtn).next().toggleClass("active");
}
  