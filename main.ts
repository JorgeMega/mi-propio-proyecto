input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("C G A G A G A C ", 500)
    music.playMelody("C G A G A G A C ", 500)
    music.playMelody("C B G E G D G C ", 500)
    music.playMelody("C5 C5 A A F F C C ", 500)
    music.playMelody("C B A D D F D C ", 500)
    music.playMelody("C D E F G F D C ", 500)
    basic.showIcon(IconNames.Happy)
    basic.showIcon(IconNames.Sad)
    basic.showIcon(IconNames.Confused)
    basic.showIcon(IconNames.Angry)
    basic.showIcon(IconNames.Asleep)
    basic.showIcon(IconNames.Surprised)
    basic.showIcon(IconNames.Silly)
    basic.showIcon(IconNames.Fabulous)
    basic.showIcon(IconNames.Meh)
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Heart)
    basic.showLeds(`
        . # . # .
        . . . # #
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.showIcon(IconNames.Skull)
    basic.showIcon(IconNames.Ghost)
    basic.showString("de Jorge")
    basic.showString("mega pro")
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
})
