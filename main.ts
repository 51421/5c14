basic.forever(function () {
    let mode = 0
    if (mode == 1) {
        if (pins.analogReadPin(AnalogPin.P0) > 200) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Sad)
            music.playTone(932, music.beat(BeatFraction.Half))
            music.playTone(740, music.beat(BeatFraction.Half))
        }
    } else {
        led.plotBarGraph(
        pins.analogReadPin(AnalogPin.P1),
        1023
        )
    }
})
