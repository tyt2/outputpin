input.onButtonPressed(Button.A, function () {
    togglePin(DigitalPin.P0)
    buttonPressed = true
})
input.onButtonPressed(Button.B, function () {
    pinFluctuate(AnalogPin.P0)
})
input.onGesture(Gesture.Shake, function () {
    //pins.analogWritePin(AnalogPin.P0, 0)
    togglePin(DigitalPin.P1)
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
function pinFluctuate(thePin: AnalogPin) {
    let start = 50
    let max = 100
    led.unplot(thePin - 100, 4)
    for (let index = 0; index <= max; index++) {
        pins.analogWritePin(thePin, 1023 * Math.constrain((start + index * (100 - start) / max) / 100, 0, 1))
        if (buttonPressed) {
            buttonPressed = false
            break
        }
        basic.pause(30)
    }
    led.plot(thePin - 100, 4)
}
function resetAllPins() {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
// Initialize
basic.showIcon(IconNames.Yes)
let pinValues = [0, 0, 0]
let buttonPressed = false
resetAllPins()
basic.clearScreen()
