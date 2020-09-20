/* ============================= */

// YOUR WEBSITE'S NAME COMES HERE
let yourWebsiteName = 'victoria\'s';

// YOUR CONTACT EMAIL COMES HERE
let yourContactEmail = 'contact' + '@' + yourWebsiteName + '.com';

// YOUR PHONE NUMBER COMES HERE
let yourPhoneNumber = '+49 648 5896 236';

// YOUR FACEBOOK ADDRESS COMES HERE
let yourFacebookAddress = 'https://www.facebook.com/';

// YOUR INSTAGRAM ADDRESS COMES HERE
let yourInstagramAddress = 'https://www.instagram.com/';

// YOUR TWITTER ADDRESS COMES HERE
let yourTwitterAddress = 'https://twitter.com';

// YOUR LINKDIN ADDRESS COMES HERE
let yourLinkdeinAddress = 'https://www.linkedin.com';

// YOUR YOUTUBE ADDRESS COMES HERE
let yourYoutubeAddress = 'https://www.youtube.com';


/* ============================= */

function showNav() {
    let nav = document.getElementById('nav');

    nav.classList.remove('hideNav');
    nav.classList.add('showNav');
}

/* ----- */
function hideNav() {
    let nav = document.getElementById('nav');

    nav.classList.remove('showNav');
    nav.classList.add('hideNav');
}

/* ============================= */


// this function will create a link to each of your social media listed bellow.
(function() {
    let facebook = document.querySelector('#facebook-address').href = yourFacebookAddress;
    let instagram = document.querySelector('#instagram-address').href = yourInstagramAddress;
    let linkdein = document.querySelector('#linkedin-address').href = yourLinkdeinAddress;
    let twitter = document.querySelector('#twitter-address').href = yourTwitterAddress;
    let youtube = document.querySelector('#youtube-address').href = yourYoutubeAddress;
})();


/* ---------------------------------------- */


// this function inserts the text "Home - 'Website's Name'" on the title IF the home page's title tag is empty.
(function() {
    let pageTitle = document.title;

    if (pageTitle === '' || pageTitle === 'Document') {
        let wordToBeThePageTitle = window.location.href.split('/');
        let title = wordToBeThePageTitle[wordToBeThePageTitle.length - 1].split('.');

        document.title = title[0] + ' - ' + yourWebsiteName;
    }
})();


/* ---------------------------------------- */


// this function inserts the website's name where it's designed to be. The users doesn't need to look for the places once they have already written the website's name in the variable 'webstieName'.
(function loadName() {
    let bannerName = document.getElementById('banner-name');
    let footerName = document.getElementById('footer-name');
    let copyright = document.getElementById('copyright');

    if (bannerName.innerHTML === '') {
        bannerName.innerHTML = yourWebsiteName;
    }

    if (footerName.innerHTML === '') {
        footerName.innerHTML = yourWebsiteName;
    }

    if (copyright.innerHTML === '') {
        copyright.innerHTML = yourWebsiteName + ' 2020';
    }
})();


/* ---------------------------------------- */

// this function will display a black screen which will fade out within 1 second every time you change pages.
(function() {
    let black = document.getElementById('black-screen');

    black.classList.add('fadeout');

})();


/* ---------------------------------------- */


// this function will dinamically add your email address where it has to be. Optionally you can add your email address manually to it's field in the CONTACT PAGE.
(function() {
    let pageTitle = document.title;

    if (pageTitle === 'contact - ' + yourWebsiteName) {
        let emailAddress = document.getElementById('email');
        let emailAddressField = 'TYPE YOUR EMAIL ADDRESS HERE'

        if (emailAddress.length < 1 || emailAddress.innerHTML === emailAddressField) {
            emailCharacters = [];

            for (let i = 0; i < yourContactEmail.length; i++) {
                if (yourContactEmail[i] != "'") {
                    emailCharacters[i] = yourContactEmail[i];
                }
            }

            email = emailCharacters.join('');

            emailAddress.innerHTML = email;
        }
    }
})();
/* ---------------------------------------- */


// this function will dinamically add your PHONE NUMBER where it has to be. Optionally you can add your PHONE NUMBER manually to it's field in the CONTACT PAGE.
(function() {
    let pageTitle = document.title;

    if (pageTitle === 'contact - ' + yourWebsiteName) {
        let phone = document.getElementById('phone');
        let phoneNumberField = 'TYPE YOUR PHONE NUMBER HERE';

        if (phone.length < 1 || phone.innerHTML === phoneNumberField) {
            phone.innerHTML = yourPhoneNumber;
        }
    }
})();