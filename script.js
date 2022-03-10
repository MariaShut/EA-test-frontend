const countdown = () => {
    const endTime = new Date('December 31, 2022 00:00:00').getTime(); //getting time in milliseconds
    const currentTime = new Date().getTime();
    const gap = endTime - currentTime;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //calculate current values till the date
    const daysValue = Math.floor(gap / day);
    const hoursValue = Math.floor((gap % day) / hour);
    const minutesValue = Math.floor((gap % hour) / minute);
    const secondsValue = Math.floor((gap % minute) / second);

    //rendering values
    document.querySelector('.days').innerText = daysValue;
    document.querySelector('.hours').innerText = hoursValue;
    document.querySelector('.minutes').innerText = minutesValue;
    document.querySelector('.seconds').innerText = secondsValue;

    setInterval(countdown, 1000);
};

countdown();