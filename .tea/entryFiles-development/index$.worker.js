if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


var AFAppX = self.AFAppX.getAppContext
  ? self.AFAppX.getAppContext().AFAppX
  : self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;
self.requirePlugin = AFAppX.requirePlugin;
        

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../node_modules/mini-antui/es/list/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/list/list-item/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/index/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/view-component/view/view?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/view-component/swiper/swiper?hash=3e2e5e2d473d03821badb5452a72c12422f436f6');
require('../../pages/view-component/scroll-view/scroll-view?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/view-component/cover-view/cover-view?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/view-component/movable-view/movable-view?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/base-component/text/text?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/base-component/icon/icon?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/base-component/progress/progress?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/base-component/rich-text/rich-text?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/form-component/button/button?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/form-component/form/form?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/form-component/label/label?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/form-component/input/input?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/form-component/textarea/textarea?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/form-component/radio/radio?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/form-component/checkbox/checkbox?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/form-component/switch/switch?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/form-component/slider/slider?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/form-component/picker/picker?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/form-component/picker-view/picker-view?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}