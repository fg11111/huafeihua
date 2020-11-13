/*

QX:
https:\/\/.*\..*\.com\/(ssp-svr\/ssp\/list3|ucp/index) url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/xxys.js
Surge:
http-response https:\/\/.*\..*\.com\/(ssp-svr\/ssp\/list3|ucp/index) requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/xxys.js
MITM = *.xxjjappss.com,*.huaerdadi.com
*/

const ad = 'ssp-svr/ssp/list3';
let obj = JSON.parse($response.body);

if ($request.url.indexOf(ad) != -1) {
delete obj.data.pmap
}

$done({body: JSON.stringify(obj)});
