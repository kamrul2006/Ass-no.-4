
function waitingTime(waitingTimes, serialNumber) {

    if (Array.isArray(waitingTimes) === false || typeof serialNumber !== 'number') {
        return 'Invalid Input'
    }

    const gonePart = waitingTimes.length
    let timeSum = 0;
    
    for (const time of waitingTimes) {
        timeSum = timeSum + time
    }

    const averag = timeSum / gonePart
    const average =Math.round(averag)

    const parGone = gonePart + 1
    const parRemaining = serialNumber - parGone

    const timeRemaining = average * parRemaining
    return timeRemaining

}

const ff =[7, 8, 3, 4, 5];
const gg = 9;
console.log(waitingTime(ff, gg))

