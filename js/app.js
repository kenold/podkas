$( document ).ready(function() {
    getUserAgent();

    function getUserAgent() {
        var el = document.getElementById('badges-list');

        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        if(/android/i.test(userAgent)){
            el.innerHTML =
            `<div class="badge badge--google">
                <a href="#"><img src="images/logos/podcast-badge-google.svg" alt="Google Podcast Logo" /></a>
            </div>` + el.innerHTML;
        }
        else if(/iPad|iPhone|iPod/i.test(userAgent)){
            el.innerHTML =
            `<div class="badge badge--apple">
                <a href="#"><img src="images/logos/podcast-badge-apple.svg" alt="Apple Podcast Logo" /></a>
            </div>` + el.innerHTML;
        }
        else {
        el.innerHTML =
            `<div class="badge badge--google">
                <a href="#"><img src="images/logos/podcast-badge-google.svg" alt="Google Podcast Logo" /></a>
            </div>
            <div class="badge badge--apple">
                <a href="#"><img src="images/logos/podcast-badge-apple.svg" alt="Apple Podcast Logo" /></a>
            </div>` + el.innerHTML;
        }
    }
});