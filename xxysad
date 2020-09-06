/*
XiaoXiaoYingShi unlock Vip
QX:
https:\/\/.*\..*\.com\/(getGlobalData) url script-response-body https://raw.githubusercontent.com/fg11111/huafeihua/master/xxysad.js
Surge:
http-response https:\/\/.*\..*\.com\/(getGlobalData) requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/fg11111/huafeihua/master/xxysad.js
MITM = *.xxjjappss.com
*/

const ad = 'getGlobalData';
let obj = JSON.parse($response.body);

if ($request.url.indexOf(ad) != -1) {
delete obj.data.iOS_adgroups
}
$done({body: JSON.stringify(obj)});
