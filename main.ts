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
    // get pin number
    let thePinNumber = thePin - 100

    // flip stored value of pin
    pinValues[thePinNumber] = Math.abs(pinValues[thePinNumber] - 1)

    // Write the flipped value to pin
    pins.digitalWritePin(thePin, pinValues[thePinNumber])

    // Set indicator explicitly instead of toggle
    if (pinValues[thePinNumber] == 0) {
        led.unplot(thePinNumber, 0)
    } else {
        led.plot(thePinNumber, 0)
    }
}
// Initialize
let pinValues = [0, 0, 0]
pins.digitalWritePin(DigitalPin.P0, 0)
pins.digitalWritePin(DigitalPin.P1, 0)
pins.digitalWritePin(DigitalPin.P2, 0)