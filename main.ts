radio.onReceivedNumber(function (receivedNumber) {
    Kjør = receivedNumber
})
let Lys = 0
let Kjør = 0
radio.setGroup(3)
Kjør = 0
let MinFart = 10
let MaxFart = 20
let Fart = 0
basic.forever(function () {
    Lys = input.lightLevel()
    if (Lys && Kjør) {
        Fart = MaxFart
    } else if (!(Lys) && Kjør) {
        Fart = MinFart
    } else {
        Fart = 0
    }
})
