let sonar = 0
radio.setGroup(1)
basic.showIcon(IconNames.Rabbit)
cuteBot.motors(20, 20)
basic.forever(function () {
    sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (sonar < 20 && sonar > 1) {
        radio.sendNumber(100)
        cuteBot.motors(0, 0)
        basic.pause(randint(100, 200))
    } else {
        radio.sendNumber(101)
        cuteBot.motors(20, 20)
    }
})
