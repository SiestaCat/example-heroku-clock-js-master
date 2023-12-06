const fs = require('node:fs');

var index = 1;

var threeSecondInterval = function(){
    let log_line = "Another 3 seconds have gone by. What did you do in them?. Crontab index " + index;
    console.log(log_line);
    fs.writeFile('./clock.log', log_line, () => {});
    index++;
    call_cron();
}

var call_cron = () => setInterval(threeSecondInterval, 3000);

call_cron();