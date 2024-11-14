/* create for project 
 * mobile web specialist 2018 
 * - Risyandi
 */

let getContent;
let text = "";
getContent = document.getElementById("content");
let urlOrigin = window.location.origin;

for (let index = 1; index < 4; index++) {
    text +=
        '  <div class="card u-clearfix">' +
        '      <div class="card-media">' +
        '        <img src="index/images/cover.jpg" alt="" class="card-media-img" />' +
        '        <span class="card-media-tag card-media-tag-orange">Assignment '+ index +'</span>' +
        '      </div>' +
        '      <div class="card-body">' +
        '        <h2 class="card-body-heading separator-bot-s">Assignment '+ index +'</h2>' +
        '        <p class="card-desc">This is the list for several task for mobile web specialist in google kejar 2018, The task are done when week '+ index +'</p>' +
        '        <div class="card-body-desc u-clearfix">' +
        '          <a href="'+ urlOrigin +'/project'+ index +'/" target="_blank" class="card-button card-button-cta">' +
        '            View Assignment '+ index +
        '          </a>' +
        '        </div>' +
        '      </div>' +
        '    </div>';

    getContent.innerHTML = text;
}	
