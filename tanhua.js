console.log($response.body);
let obj=JSON.parse($response.body);
/*obj={
  "data": {
    "member_name":"huahua",
    "mobile":"18800008888",
    "user_viptime":"2099-09-09",
    "status":1,
    "is_vip":1
  }
}
*/

obj.data.status=1

console.log(JSON.stringify(obj));
$done({body: JSON.stringify(obj)})
