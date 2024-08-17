// Smooth scrolling
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});

// Animate skill bars
$(document).ready(function(){
    $(window).scroll(function() {
        var hT = $('#skills').offset().top,
            hH = $('#skills').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT + hH - wH)) {
            $('.progress-bar').each(function() {
                var bar_value = $(this).attr('aria-valuenow') + '%';
                $(this).animate({ width: bar_value }, { duration: 2000, easing: 'easeOutCirc' });
            });
        }
    });
});

// Form submission confirmation
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.');
        this.reset();
    });
});
