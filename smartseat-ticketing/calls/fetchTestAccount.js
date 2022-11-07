export default async function TestAccount (){
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json; charset=utf-8");
myHeaders.append("X-API-Key", "opensesame");

var raw = "[{\"type\": \"BigNumber\",\"hex\": \"0x05f5e100\"}]";

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

await fetch("https://localhost:3000/stdlib/newTestAccount", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}