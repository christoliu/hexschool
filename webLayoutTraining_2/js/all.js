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