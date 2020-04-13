Page({
  data: {},
  onLoad() {
    my.request({
      url: 'https://api.rockneo.com/hello',
      method: 'POST',
      data: {
        name: '支付宝',
        production: 'AlipayJSAPI',
      },
      headers: {
        'content-type': 'application/json'  //默认值
      },
      dataType: 'json',
      success: function (res) {
        my.alert({ content: JSON.stringify(res, null, '    ') });
      },
      fail: function (res) {
        my.alert({ content: 'fail' });
      }
    });
  },
});
