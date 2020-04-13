Page({
  data:{
    functionHidden: false,
    functionSamples:['network-test'],
    viewHidden: true,
    viewSamples:['view','swiper','scroll-view','cover-view','movable-view'],
    baseHidden: true,
    baseSamples:['text','icon','progress','rich-text'],
    formHidden: true,
    formSamples:['button','label','form','input','textarea','radio','checkbox','switch','slider','picker','picker-view']
  },
  changeFunctionVisible(){
    this.setData({
      functionHidden: !this.data.functionHidden
    })
  },
  openFunctionSamples(e){
    var item = e.target.dataset.sampleItem
    my.navigateTo({
      url: '/pages/function-component/'+item+'/'+item
    });
  },
  changeViewVisible(){
    this.setData({
      viewHidden: !this.data.viewHidden
    })
  },
  openViewSamples(e){
    var item = e.target.dataset.sampleItem
    my.navigateTo({
      url: '/pages/view-component/'+item+'/'+item
    });
  },
  changeBaseVisible(){
    this.setData({
      baseHidden: !this.data.baseHidden
    })
  },
  openBaseSamples(e){
    var item = e.target.dataset.sampleItem
    my.navigateTo({
      url: '/pages/base-component/'+item+'/'+item
    });
  },
  changeFormVisible(){
    this.setData({
      formHidden: !this.data.formHidden
    })
  },
  openFormSamples(e){
    var item = e.target.dataset.sampleItem
    my.navigateTo({
      url: '/pages/form-component/'+item+'/'+item
    });
  }
});
