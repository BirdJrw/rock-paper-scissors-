radio.onReceivedNumber(function (receivedNumber) {
    let recievedNumber = 0
    serialNumber = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    match = tool == recievedNumber
    player_index = players.indexOf(serialNumber)
    found = player_index >= 0
    if (match && !(found)) {
        players.push(serialNumber)
    }
    if (!(match) && found) {
        temp = players.removeAt(player_index)
    }
})
input.onGesture(Gesture.Shake, function () {
    players = [0]
    tool = randint(0, 2)
})
let temp = 0
let found = false
let players: number[] = []
let player_index = 0
let tool = 0
let match = false
let serialNumber = 0
let list = [0]
radio.setGroup(10)
radio.setTransmitSerialNumber(true)
basic.forever(function () {
    radio.setGroup(tool)
    if (tool == 0) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (tool == 1) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
    basic.showNumber(players.length)
})
