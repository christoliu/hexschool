function initSwiper() { // 自訂初始化的 Swiper 套件的函式
    // id="comment-swiper" 區塊是我想要使用 swiper 套件的範圍
    const swiper = new Swiper('#comment-swiper', {
        slidesPerView: 1,           // 預設要顯示幾個卡片

        breakpoints: {              // 斷點設定
          992: {                    // 螢幕寬度大於等於992px時切換為3欄
            slidesPerView: 3
          },
          768: {
            slidesPerView: 2        // 螢幕寬度大於等於768px時切換為2欄
          },
          0: {
            slidesPerView: 1        // 更小時都顯示1欄
          }
        },
        spaceBetween: 16,           // 卡片元素的間隔
        direction: 'horizontal',    // swiper運行方向(不必寫->default)
        loop: true,
        
        pagination: {
            el: '.swiper-pagination',   // 想將分頁圓點綁在哪個 class
            clickable: true         // 將輪播設定為可以點擊分頁圓點來切換圖片
        }
    });
}

/* 觸發自己定義的函式 */
initSwiper();

/* QA觸發 */
function faq1_open() {
    let myImage = document.getElementById('faq1');
    let mySrc = myImage.getAttribute('src');
    let myParagraph = document.getElementById('faq1_p');
    if(mySrc === 'img/icon_plus.svg') {
      myImage.setAttribute ('src','img/icon_minus.svg');
      myParagraph.setAttribute ('class','v-v');
      document.getElementById('faq2').setAttribute ('src','img/icon_plus.svg');
      document.getElementById('faq3').setAttribute ('src','img/icon_plus.svg');
      document.getElementById('faq2_p').setAttribute('class','v-h');
      document.getElementById('faq3_p').setAttribute('class','v-h');
    } else {
      myImage.setAttribute ('src','img/icon_plus.svg');
      myParagraph.setAttribute ('class','v-h');
    }
}
function faq2_open() {
    let myImage = document.getElementById('faq2');
    let mySrc = myImage.getAttribute('src');
    let myParagraph = document.getElementById('faq2_p');
    if(mySrc === 'img/icon_plus.svg') {
      myImage.setAttribute ('src','img/icon_minus.svg');
      myParagraph.setAttribute ('class','v-v');
      document.getElementById('faq3').setAttribute ('src','img/icon_plus.svg');
      document.getElementById('faq1').setAttribute ('src','img/icon_plus.svg');
      document.getElementById('faq3_p').setAttribute('class','v-h');
      document.getElementById('faq1_p').setAttribute('class','v-h');
    } else {
      myImage.setAttribute ('src','img/icon_plus.svg');
      myParagraph.setAttribute ('class','v-h');
    }
}
function faq3_open() {
    let myImage = document.getElementById('faq3');
    let mySrc = myImage.getAttribute('src');
    let myParagraph = document.getElementById('faq3_p');
    if(mySrc === 'img/icon_plus.svg') {
      myImage.setAttribute ('src','img/icon_minus.svg');
      myParagraph.setAttribute ('class','v-v');
      document.getElementById('faq2').setAttribute ('src','img/icon_plus.svg');
      document.getElementById('faq1').setAttribute ('src','img/icon_plus.svg');
      document.getElementById('faq2_p').setAttribute('class','v-h');
      document.getElementById('faq1_p').setAttribute('class','v-h');
    } else {
      myImage.setAttribute ('src','img/icon_plus.svg');
      myParagraph.setAttribute ('class','v-h');
    }
}


/**/
function cost10k(){
    let pplNum = 10000;
    let sMoney = 600;
    let bMoney = 1600;
    document.getElementById('countA').innerHTML = pplNum; 
    document.getElementById('countB').innerHTML = (pplNum/5000 - 1) * sMoney;
    document.getElementById('countC').innerHTML = pplNum;
    document.getElementById('countD').innerHTML = (pplNum/5000 - 1) * bMoney;
}
function cost15k(){
    let pplNum = 15000;
    let sMoney = 600;
    let bMoney = 1600;
    document.getElementById('countA').innerHTML = pplNum; 
    document.getElementById('countB').innerHTML = (pplNum/5000 - 1) * sMoney;
    document.getElementById('countC').innerHTML = pplNum;
    document.getElementById('countD').innerHTML = (pplNum/5000 - 1) * bMoney;
}
function cost20k(){
    let pplNum = 20000;
    let sMoney = 600;
    let bMoney = 1600;
    document.getElementById('countA').innerHTML = pplNum; 
    document.getElementById('countB').innerHTML = (pplNum/5000 - 1) * sMoney;
    document.getElementById('countC').innerHTML = pplNum;
    document.getElementById('countD').innerHTML = (pplNum/5000 - 1) * bMoney;
}
function cost25k(){
    let pplNum = 25000;
    let sMoney = 600;
    let bMoney = 1600;
    document.getElementById('countA').innerHTML = pplNum; 
    document.getElementById('countB').innerHTML = (pplNum/5000 - 1) * sMoney;
    document.getElementById('countC').innerHTML = pplNum;
    document.getElementById('countD').innerHTML = (pplNum/5000 - 1) * bMoney;
}
function cost30k(){
    let pplNum = 30000;
    let sMoney = 600;
    let bMoney = 1600;
    document.getElementById('countA').innerHTML = '>25000'; 
    document.getElementById('countB').innerHTML = (pplNum/5000 - 1) * sMoney;
    document.getElementById('countC').innerHTML = '>25000';
    document.getElementById('countD').innerHTML = (pplNum/5000 - 1) * bMoney;
}
