*/


var modifiedHeaders = $request.headers;

modifiedHeaders['authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6OTgwNDk5LCJ1c2VybmFtZSI6Imlvc2hrajEifQ.0lMg96NyeqTl6hJBcRAGlFynaW_GxUaV4iozIPpaJSI';

$done({headers : modifiedHeaders});