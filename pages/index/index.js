Page({
  data:{
    samples:['view','swiper','scroll-view','cover-view','movable-view']
  },
  openSamples(e){
    var item = e.target.dataset.sampleItem
    my.navigateTo({
      url: '/pages/'+item+'/'+item
    });
  }
});
