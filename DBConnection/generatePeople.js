const { getRandomInt } = require('./lib');

const generatePeople = (quantity) => {
    const generateEmail = (firstName, lastName, ext) =>
        `${firstName}_${lastName}@${ext}`;

    const maleNames = ['Andrew', 'Bob', 'Robert', 'Russel', 'Peter', 'Morgan'];
    const femaleNames = ['Anna', 'Helen', 'Maria', 'Elizabeth', 'Sofia'];
    const lastNames = ['Scott', 'Watson', 'Smith', 'Brown', 'Miller', 'Davis'];
    const genders = ['Female', 'Male'];
    const emails = ['gmail.com', 'icloud.com', 'mail.ru', 'yandex.ru'];

    const people = [];
    for (let i = 0; i < quantity; i++) {
        const gender = genders[getRandomInt(genders.length - 1)];
        const firstName =
            gender === 'Male'
                ? maleNames[getRandomInt(maleNames.length - 1)]
                : femaleNames[getRandomInt(femaleNames.length - 1)];
        const lastName = lastNames[getRandomInt(lastNames.length - 1)];
        const age = getRandomInt(100);
        const email = generateEmail(
            firstName,
            lastName,
            emails[getRandomInt(emails.length - 1)]
        );

        people.push({
            firstName,
            lastName,
            gender,
            age,
            email,
        });
    }

    return people;
};

module.exports = generatePeople;
