function calculateTax(income, expenses) {

    if (expenses < 0 || income < 0 || expenses > income) {
        return 'Invalid Input';
    }

    const ay = income - expenses;
    const tax = ay * 20 / 100;
    return tax;
}



function sendNotification(email) {

    if (email.includes('@') === false) {
        return 'Invalid Email';
    }

    const slEm = email.split('@');
    const uName = slEm[0];
    const dName = slEm[1];

    const notify = uName + ' sent you an email from ' + dName;
    return notify;

}



function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return 'Invalid Input';
    }
    else if (name.includes(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)) {
        return true;
    }
    else {
        return false;
    }

}



function calculateFinalScore(obj) {
    let ffarmar = 0;

    if (typeof obj !== 'object') {
        return 'Invalid Input';
    }

    if (obj.isFFamily === true) {
        const farmar = 20;
        ffarmar = farmar;
    }

    if (obj.isFFamily !== true) {
        const farmar = 0;
        ffarmar = farmar;
    }

    const mark = ffarmar + obj.testScore + obj.schoolGrade;

    if (mark >= 80) {
        return true;
    }
    else if (mark < 80) {
        return false;
    }

}



function waitingTime(waitingTimes, serialNumber) {

    if (Array.isArray(waitingTimes) === false || typeof serialNumber !== 'number') {
        return 'Invalid Input';
    }

    const gonePart = waitingTimes.length;
    let timeSum = 0;

    for (const time of waitingTimes) {
        timeSum = timeSum + time;
    }

    const averag = timeSum / gonePart;
    const average = Math.round(averag);

    const parGone = gonePart + 1;
    const parRemaining = serialNumber - parGone;

    const timeRemaining = average * parRemaining;
    return timeRemaining;

}



