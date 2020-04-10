Page({
  data: {
    focus: false,
    inputValue: '',
    search: ''
  },
  onLoad() {},
  bindButtonTap(){
    // blur 事件和这个冲突
    setTimeout(() => {
      this.onFocus();
    }, 100);
  },
  onFocus(){
    this.setData({
      focus: true
    })
  },
  onBlur(){
    this.setData({
      focus: false
    })
  },
  bindKeyInput(e){
    this.setData({
      inputValue: e.detail.value
    })
  },
  bindHideKeyboard(e){
    if(e.detail.value === '123'){
      my.hideKeyboard();
    }
  },
  doneSearch(){
    my.alert({
      title: "doneSearch"
    });
    my.hideKeyboard();
  },
  clearSearch(){
    my.alert({
      title: "clearSearch"
    });
    this.setData({
      search: ''
    })
  },
  handleSearch(e) {
    console.log('search', e.detail.value);
    this.setData({
      search: e.detail.value,
    });
  },
});
