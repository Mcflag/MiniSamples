Page({
  data: {
    background: [
      { color: 'blue', text: '支付宝' },
      { color: 'red', text: '小程序' },
      { color: 'yellow', text: 'Swiper' }
    ],
    indicatorDots: true,
    autoplay: true,
    vertical: false,
    interval: 1000,
    circular: false,
    duration: 1500,
  },
  onLoad() {},
  swiperItemTap(e){
    my.showToast({
      content: e.target.dataset.value
    });
  },
  changeIndicatorDots(e){
    this.setData({
      indicatorDots: e.detail.value
    });
  },
  changeVertical(e){
    this.setData({
      vertical: e.detail.value
    })
  },
  changeAutoplay(e){
    this.setData({
      autoplay: e.detail.value
    })
  },
  changeCircular(e){
    this.setData({
      circular: e.detail.value
    })
  },
  intervalChange(e){
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange(e){
    this.setData({
      duration: e.detail.value
    })
  }
});
