console.log($response.body);
let obj=JSON.parse($response.body);
/*obj={
  "data": {
    "status": "200",
  "msg": "返回成功",
  "data": {
    "member_name": 
    "mobile": "18800008888",
    "head_pic": "https://i.loli.net/2020/07/04/NBrHSoDL1TEfdjX.png",
    "parent_id": 888,
    "user_viptime": "2099-09-09",
    "status": 1,
    "is_vip": 1
  }
}
*/

obj.data.status=1

console.log(JSON.stringify(obj));
$done({body: JSON.stringify(obj)})
