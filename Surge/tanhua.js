#!name=huafeihua iOS Script Module11
#!desc=iOS Script 模块配置

[Script]
http-response ^https:\/\/lginstaacademy\.com(\/\/api\/movie\/addPlay|\/\/api\/member|\/api\/video_clip\/play|\/api\/app\/message_list|\/api\/home\/index_recommend|\/\/api\/movie\/play\/) requires-body=1,script-path=https://raw.githubusercontent.com/fg11111/huafeihua/master/Kumi.js, tag=酷咪


[MITM]
hostname = %APPEND% lginstaacademy.com
