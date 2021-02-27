#!name=huafeihua iOS Script Module111
#!desc=iOS Script 模块配置

[Script]
http-response https?:\/\/ua00dzvhirdr6fnvrif5\.xiangxiangapps.com requires-body=1,script-path=https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Json/香蕉视频%201.8%2B%20解锁次数限制.json

[MITM]
hostname = %APPEND% *.xiangxiangapps.com
