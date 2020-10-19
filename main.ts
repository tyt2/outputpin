input.onButtonPressed(Button.A, function () {
    togglePin(DigitalPin.P0)
})
input.onButtonPressed(Button.B, function () {
    togglePin(DigitalPin.P1)
})
input.onGesture(Gesture.Shake, function () {
    togglePin(DigitalPin.P2)
})
function togglePin (thePin: DigitalPin) {
    let pinValue = 0
    pinValue = pins.digitalReadPin(thePin) //DigitalPin.P0)
    pinValue = Math.abs(pinValue - 1)
    pins.digitalWritePin(thePin, pinValue)
    if (pinValue == 0) {
        led.unplot(thePin-100, 0)
    } else {
        led.plot(thePin-100, 0)
    }
}
