console.log($response.body);
let obj=JSON.parse($response.body);
/*obj={
  "data": {
    "is_vip": 1
  }
}
*/

obj.data.is_vip=1

console.log(JSON.stringify(obj));
$done({body: JSON.stringify(obj)})
