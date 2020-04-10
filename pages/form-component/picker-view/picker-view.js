Page({
  data: {
    year:['2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020'],
    season:['春','夏','秋','冬']
  },
  onLoad() {},
  onChange(e) {
    const [x,y] = e.detail.value;
    console.log(this.data.year[x] + "年" + this.data.season[y]);
    this.setData({
      value: e.detail.value,
    });
  },
});
