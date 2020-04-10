Page({
  data: {
    loading: 'true'
  },
  onLoad() {},
  onShareAppMessage() {
    return {
      title: 'view page',
      desc: '分享点东西',
      path: 'page/component/view/view',
    };
  },
  onSubmit() {
    my.alert({ title: 'You click submit' });
  },
  onReset() {
    my.alert({ title: 'You click reset' });
  },
  changeLoading(){
    this.setData({
      loading: !this.data.loading
    })
  }
});
