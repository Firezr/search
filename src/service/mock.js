let express=require('express');
let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: false });
//创建服务器
let app=express();

//开启服务器并监听端口
app.listen(8090,function(){
    console.log('this express server is running at http://127.0.0.1:8090 ');
})

//注册app中间件use,可处理get和post请求
app.use(function(req, res, next){
   res.set({
     'Access-Control-Allow-Origin': '*'
   })
   next()
})


//注册get请求中间键
app.get('/api/search/complex',function(req,res){
    //服务器回应数据
    // res.send('这是主页面的内容')
    res.json({
      "code": 200,
      "message": "OK",
      "data": {
        "since": -1,
        "total": 0,
        "hit": [
          {
            "id": 1,
            "title": "新冠肺炎发布会第100场",
            "publish_time": 1601875158,
            "attend_person": ["宜昌市人民政府副市长周正英"],
            "site": "湖北",
            "summary": "9月29日上午，省政府新闻办举行新闻发布会。太原市人民政府副市长焦斌龙、省体育局二级巡视员程中平、华舰体育控股集团代表王志勇，大同市左云县副县长胡世玲，朔州市右玉县副县长李玉兰，山西九牛牧业股份有限公司董事长吴小东，介绍2020第二届“环太原”国际公路自行车赛有关情况并回答记者提问。",
            "detail_url": "http://www.shanxi.gov.cn/yw/xwfbh/szfxwfbh/202009/t20200929_859251.shtml"
          },
          {
            "id": 2,
            "title": "新冠肺炎发布会第200场",
            "publish_time": 1601875158,
            "attend_person": ["宜昌市人民政府副市长周正英"],
            "site": "湖北",
            "summary": "9月29日上午，省政府新闻办举行新闻发布会。太原市人民政府副市长焦斌龙、省体育局二级巡视员程中平、华舰体育控股集团代表王志勇，大同市左云县副县长胡世玲，朔州市右玉县副县长李玉兰，山西九牛牧业股份有限公司董事长吴小东，介绍2020第二届“环太原”国际公路自行车赛有关情况并回答记者提问。",
            "detail_url": "http://www.shanxi.gov.cn/yw/xwfbh/szfxwfbh/202009/t20200929_859251.shtml"
          },
          {
            "id": 3,
            "title": "新冠肺炎发布会第300场",
            "publish_time": 1601875158,
            "attend_person": ["宜昌市人民政府副市长周正英"],
            "site": "湖北",
            "summary": "9月29日上午，省政府新闻办举行新闻发布会。太原市人民政府副市长焦斌龙、省体育局二级巡视员程中平、华舰体育控股集团代表王志勇，大同市左云县副县长胡世玲，朔州市右玉县副县长李玉兰，山西九牛牧业股份有限公司董事长吴小东，介绍2020第二届“环太原”国际公路自行车赛有关情况并回答记者提问。",
            "detail_url": "http://www.shanxi.gov.cn/yw/xwfbh/szfxwfbh/202009/t20200929_859251.shtml"
          }
        ]
      }
    }); //返回json内容
    // let query =req.query;   //get请求传入的查询参数中对应键的值
})

// app.get('/movie',function(req,res){
//     res.send('这是一个电影页面的内容');
// })

// app.post('/submit',urlencodedParser,function(req,res){
//     res.send('这是一个post请求的数据');
//     var 变量=req.body.键名;  //post请求传入的查询参数中对应键的值
//     //使用前先加载 require(‘body-parser‘);中间件
// })
