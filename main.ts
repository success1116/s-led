for (let y = 0; y <= 4; y++) {
    for (let x = 0; x <= 4; x++) {
        led.plot(x, 0)
        basic.pause(100)
        if (x == 4) {
            led.plot(x, y)
        }
        if (y == 4) {
            led.plot(y - x, y)
        }
    }
}
basic.forever(function () {
	
})
