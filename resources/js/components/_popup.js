const isSafari = /constructor/i.test(window.HTMLElement);

(function($) {
    $.fn.closePopup = function() {
        $(this).removeClass("popup-open");
        // $("body").css('padding-right', '0');
        let allPopupOpen = $(".popup.popup-open");
        console.log(allPopupOpen);
        setTimeout(() => {
            $(this).hide();
            if (allPopupOpen.length <= 0) $("body").removeClass("show-popup").css('padding-right','0');
            if (isSafari)
                $(this)
                    .find("overlay")
                    .bind("touchmove", true);
        }, 210);
    };
})(jQuery);

(function($) {
    $.fn.openPopup = function() {
        var scrollWidthBar = window.innerWidth - $('body').width();
        $("body").addClass("show-popup");
        $("body").css("padding-right", scrollWidthBar);
        // $(this).addClass("popup-open");
        $(this).show();
        setTimeout(() => {
            $(this).addClass("popup-open");
        }, 100);
        if (isSafari){
            $(this).find("overlay").bind("touchmove", false);
        }
    };
})(jQuery);

$(document).delegate(".btn-open-popup", "click", function(e) {
    let popupName = $(this).attr("attr-popup");
    if (popupName) {
        let id = "#" + popupName;
        $(id).openPopup();
    }
});

$(document).delegate(".btn-close-popup", "click", function() {
    $(this)
        .closest(".attr-popup")
        .closePopup();
});

$(document).delegate(".btn-close-popup", "click", function() {
    $(this)
        .closest(".popup-slide-up")
        .closePopup();
});

$(document).ready(function(){
    $(document).delegate('.overlay','click',function(){
        $(this).parent().closePopup();
    });
});