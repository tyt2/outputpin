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
    let theCurrentPin = thePin - 100

    // toggle stored value of pin
    pinValues[theCurrentPin] = Math.abs(pinValues[theCurrentPin] - 1)

    // Write value to pin
    pins.digitalWritePin(thePin, pinValues[theCurrentPin])

    // Set indicator
    led.toggle(theCurrentPin, 0)
}
// Initialize
let pinValues = [0, 0, 0]
pins.digitalWritePin(DigitalPin.P0, 0)
pins.digitalWritePin(DigitalPin.P1, 0)
pins.digitalWritePin(DigitalPin.P2, 0)