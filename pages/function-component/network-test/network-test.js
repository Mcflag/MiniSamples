Page({
  data: {},
  onLoad() {
  },
  onSubmit(e) {
    var up=e.detail.value;
    console.log(e.detail.value);
    my.request({
      url: 'https://api.rockneo.com/test',
      method: 'POST',
      data: {
        'username': e.detail.value,
        'password': e.detail.password
      },
      headers: {
        'content-type': 'application/json'  //默认值
      },
      dataType: 'json',
      success: function (res) {
        my.alert({content: JSON.stringify(res.data)});
      },
      fail: function (res) {
        my.alert({content: 'fail'});
      }
    });
  },
  onReset() {
    
  },
});
