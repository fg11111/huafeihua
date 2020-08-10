/*
#黄瓜视频完美🔓 by JungegeCN
下载地址：www.hg.live

圈X：
https:\/\/api1000\.cvxia\.com\/(user\/info|mov\/browse2*) url script-response-body https://raw.githubusercontent.com/fg11111/huafeihua/master/hgsp.js

Loon:
[Script]
#黄瓜视频VIP
http-response ^https:\/\/ap1000\.cvxia\.com\/(user\/info|mov\/browse2*) script-path=https://raw.githubusercontent.com/fg11111/huafeihua/master/hgsp.js, requires-body=true, timeout=10, tag=黄瓜视频VIP

MITM = http://api1000.cvxia.com


*/

var body = $response.body;




body=body.replace(/vipLogo\":\d/g,'vipLogo":4').replace(/gender\":(\-|\+?)\d+/g,'gender":1').replace(/isPaid\":\d+/g,'isPaid":1').replace(/supUserId\":\d+/g,'supUserId":0').replace(/hasBuy\":\w+/g,'hasBuy":true').replace(/vipEndDate\":\"(.*?)\"/g,'vipEndDate":\"2222-02-22\"').replace(/phone\":\"(.*?)\"/g,'phone":\"JungegeCN\"').replace(/userCls\":\d+/g,'userCls":2').replace(/isExpired\":\d+/g,'isExpired":1');


$done({body});
