input.onButtonPressed(Button.A, function () {
    togglePin1()
})
function togglePin1 () {
    Pin1Value = Math.abs(Pin1Value - 1)
    pins.digitalWritePin(DigitalPin.P0, Pin1Value)
}
function togglePin2 () {
    Pin2Value = Math.abs(Pin2Value - 1)
    pins.digitalWritePin(DigitalPin.P1, Pin2Value)
}
input.onButtonPressed(Button.B, function () {
    togglePin2()
})
let Pin2Value = 0
let Pin1Value = 0
Pin1Value = 0
basic.forever(function () {
	
})
