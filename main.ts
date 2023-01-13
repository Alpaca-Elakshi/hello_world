input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . . # . .
        . # # # .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
})
basic.showLeds(`
    . . . . .
    . # . # .
    . # # # .
    . # . # .
    . . . . .
    `)
