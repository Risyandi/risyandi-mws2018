var parallaxStyle = "\
.item-parallaxAds{\
    padding-bottom:50%;\
    width:100%;\
    margin:auto;\
    max-height:180px !important;\
    background: #333;\
    text-align: center;\
    height: 100% !important;\
    background: url('https://tpc.googlesyndication.com/pagead/imgad?id=CICAgKCb4pbu4AEQARgBMgjJNxt9zMZ8yw') no-repeat;\
    background-attachment: fixed;\
    background-repeat: none;\
    background-size: cover;\
  }\
.title-adsUp, .title-adsBottom {\
    color: #fff;\
    text-transform: uppercase;\
    font: normal 9px arial;\
    left: 0px;\
    margin: 0px;\
    width: 100%;\
    height: 18px;\
    line-height: 20px;\
    background: #696868;\
    letter-spacing: 1.01px;\
    text-align: center;\
    position: relative;\
    top: 97%;\
  }\
.gap-test {\
    margin-bottom:2500px !important;\
  }\
.landing-page {\
    cursor: pointer;\
  }\
";

var parallaxElementStyle = parent.document.createElement('style');
parallaxElementStyle.type = 'text/css';
parallaxElementStyle.appendChild(document.createTextNode(parallaxStyle));
parent.document.getElementsByTagName('head')[0].appendChild(parallaxElementStyle);

var parallaxTemplate = '\
  <div class="wrap-parallaxAds" id="wrap-parallaxAds">\
    <div class="gap-test"></div>\
    <div class="title-adsUp">Advertisement</div>\
    <a href="https://bolalob.com/" class="landing-page" target="_blank">\
      <div class="item-parallaxAds" id="item-parallaxAds"></div>\
    </a>\
    <div class="title-adsBottom">Advertisement</div>\
    <div class="gap-test"></div>\
  </div>\
';

var parallaxElementTemplate = parent.document.createElement('div');
parallaxElementTemplate.innerHTML = parallaxTemplate;
parallaxElementTemplate.setAttribute('class', 'parallaxAds');
parallaxElementTemplate.setAttribute('id', 'parallaxAds');
parent.document.querySelector('div.parallax-mobile').parentNode.insertBefore(parallaxElementTemplate, parent.document.querySelector('div.parallax-mobile'));