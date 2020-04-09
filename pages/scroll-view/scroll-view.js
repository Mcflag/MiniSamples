import debounce from "./debounce";

const order = ['blue', 'red', 'yellow', 'green'];

Page({
  data: {
    currentView: 'blue',
    toView: 'blue',
    scrollTop: 100
  },
  onLoad() {
    this.scroll = debounce(this.scroll.bind(this), 100);
  },
  upper() {
  },
  lower() {
  },
  scroll(e) {
    let i = Math.round(e.detail.scrollTop / 200);
    this.setData({
      currentView: order[i],
      scrollTop: e.detail.scrollTop
    });
  },
  scrollToTop() {
    this.setData({
      scrollTop: 0
    })
  },
  tap() {
    for (let i = 0; i < order.length; i++) {
      if (order[i] === this.data.currentView) {
        const next = (i + 1) % order.length;
        this.setData({
          toView: order[next],
          scrollTop: next*200
        });
        break;
      }
    }
  },
  tapMove() {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
});
