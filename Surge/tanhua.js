#!name=huafeihua iOS Script Module11
#!desc=iOS Script 模块配置

[Script]
http-response ^https://1008610010\.laikanshu\.top/Member/getUserInfo requires-body=1,script-path=https://raw.githubusercontent.com/fg11111/huafeihua/master/tanhua.js


[MITM]
hostname = %APPEND% 1008610010.laikanshu.top
