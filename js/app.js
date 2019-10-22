var md = new MobileDetect(window.navigator.userAgent);
var el = document.getElementById('badges-list');

if (md.is('iPhone')) {
    el.innerHTML =
        `<div class="badge badge--apple">
            <a href="#"><img src="images/logos/podcast-badge-apple.svg" alt="Apple Podcast Logo" /></a>
        </div>` + el.innerHTML;
} else if (md.is('AndroidOS')) {
    el.innerHTML =
        `<div class="badge badge--google">
            <a href="#"><img src="images/logos/podcast-badge-google.svg" alt="Google Podcast Logo" /></a>
        </div>` + el.innerHTML;
} else {
    el.innerHTML =
        `<div class="badge badge--google">
            <a href="#"><img src="images/logos/podcast-badge-google.svg" alt="Google Podcast Logo" /></a>
        </div>
        <div class="badge badge--apple">
            <a href="#"><img src="images/logos/podcast-badge-apple.svg" alt="Apple Podcast Logo" /></a>
        </div>` + el.innerHTML;
}