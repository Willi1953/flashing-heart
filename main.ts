input.onButtonPressed(Button.A, function () {
    JoyCar.drive(FRDirection.Forward, 92)
    JoyCar.bias(LRDirection.Right, 100)
    JoyCar.stop(StopIntensity.Soft)
})
