const  baseUrl = `http://www.myy2.com/h5/13/common/apply/task/` ;
const 方法= `POST` ;
常量标头= {
  “接受”：“ * /*”， 
  '接受编码' : `gzip, deflate` ,
  '来源'：'http://www.myy2.com'，
  'Cookie' : `JSESSIONID= ${ myJSESSIONID } `,
  '连接' : '保持活动' ,
  '主机' : `www.myy2.com` ,
  'User-Agent' : `Mozilla/5.0（iPhone；CPU iPhone OS 15_3_1，如 Mac OS X）AppleWebKit/605.1.15（KHTML，如 Gecko）Mobile/15E148 MicroMessenger/8.0.42(0x18002a32) NetType/4G Language/ zh_CN`,
  '推荐人'：'http://www.myy2.com/h5/13/common/index.jscr`，
  '接受语言' : `zh-CN,zh-Hans;q=0.9` ,
  'X-Requested-With' : `XMLHttpRequest`
};

const 过渡时间=新日期( “2024-02-23T11:00:00Z” ) ; // 告知时间

const 当前时间=新日期( ) ;
if (当前时间 > 过渡时间) {
  安慰。log ( "过渡已过渡，请联系派大星重新授权。" ) ;
$notify ( "派大星微信号" , "SDQD6318" , "剧本已剧本，请联系派大星重新获取剧本。" )
  $完成( ) ;
另外

函数延迟（时间）{
  返回新的 Promise (resolve => setTimeout(resolve, time));
}

判断函数 runCode ( ) {
  让成功=假；
  设置错误=假；
  
  for (让 i = 0 ; i < 50 ; i++ ) {
    const 活动 ID = 10536 + i; //极限循环增加url的最后一个数字
    const url = baseUrl + 活动Id;
    前台。log ( " \n当前商品ID是：" + ActivityId ) ; // 输出修改后的URL的最后一串数字
    常量 myRequest = {
      网址：网址，
      方法： 方法，
      标题：标题，
      身材：''
    };

    常量响应=等待$task. 获取（我的请求）；
    安慰。log (response.statusCode + " \n\ n " + response.body ) ;

    if (response.body.includes("服务器错误,请联系管理员")) {
      安慰。log(“\n此次拍卖漏捡失败，请下一个小时吃饭”) ;
     
      错误=真；
      休息；
    }
      if  ( response.body.includes ( 'data" : null , "code":200,"msg ' ) ) { 
      安慰。log ( " \n恭喜🎉🎉🎉捡漏成功！🎉🎉🎉 \n " ) ;
     $notify ( "我是派大星" , "恭喜你！" , "恭喜🎉捡漏成功！🎉🎉🎉 \n " )
      成功=真；
      休息;
    }
    
    等待 延迟( 10 ) ; //延迟5毫秒
  }

  if  ( !成功 && !错误)  {
    安慰。log ( " \n未能捡到成功，请下个时间段重试\n  \n " ) ;
  }

  $完成( ) ;

}
运行代码( ) ;



