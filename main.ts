input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 6))
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.InBackground)
})
