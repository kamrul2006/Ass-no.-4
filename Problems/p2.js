function sendNotification(email) {

    if (email.includes('@') === false) {
        return 'Invalid Email';
    };
    const slEm = email.split('@');
    const uName = slEm[0];
    const dName = slEm[1];

    const notify = uName + ' sent you an email from ' + dName;
    return notify;

}

const email = 'kamrulislamapurba54678.gmail.com'
const Email = 'kamrulislamapurba54678.gmail.com'

console.log(sendNotification(email))