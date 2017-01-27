let stocks = process.argv.slice(2);
let https = require('https');

let get = (stock) => {
    let url = "https://www.google.com/finance/info?q=NSE:" + stock;
    let request = https.get(url, (response) => {
        let body = "";
        response.on('data', (chunk) => {
            body += chunk;
        });
        response.on('end', () => {
            body = body.slice(4);
            let obj = JSON.parse(body);
            
            console.log("\nThe current price of " + stock + " is " + obj[0].l);
            console.log(obj[0].e + ": " + stock + " - " + obj[0].elt + "\n" + obj[0].l + "\n");
        });
    });
};

stocks.forEach(stock => {
    get(stock);
});