require('dotenv').config();
const mongoose = require('mongoose');
const PersonSchema = require('./PersonSchema');
const { executionTime } = require('./lib');
const generatePeople = require('./generatePeople');

const run = async (uri, people) => {
    const connectionParams = {
        useUnifiedTopology: true,
    };
    const connection = mongoose.createConnection(uri, connectionParams);

    const PersonModel = connection.model('Person', PersonSchema);

    await PersonModel.deleteMany({});

    const writeExecTime = await executionTime(
        async () => await PersonModel.insertMany(people)
    )();
    const readExecTime = await executionTime(
        async () => await PersonModel.find({})
    )();

    return {
        writeExecTime: writeExecTime.executionTime,
        readExecTime: readExecTime.executionTime,
    };
};

const people = generatePeople(10000);

run('mongodb://localhost:27018/test', people)
    .then(({ writeExecTime, readExecTime }) => {
        console.log(`LOCAL WRITE: ${writeExecTime}`);
        console.log(`LOCAL READ: ${readExecTime}`, '\n');
    })
    .catch((err) => console.log(err));

run('mongodb://localhost:27017/test', people)
    .then(({ writeExecTime, readExecTime }) => {
        console.log(`DOCKER WRITE: ${writeExecTime}`);
        console.log(`DOCKER READ: ${readExecTime}`, '\n');
    })
    .catch((err) => console.log(err));

run(
    `mongodb+srv://inctnce:${process.env.REMOTE_MONGO_PASSWD}@cluster0.jfcs7.mongodb.net/Grid?retryWrites=true&w=majority`,
    people
)
    .then(({ writeExecTime, readExecTime }) => {
        console.log(`REMOTE WRITE: ${writeExecTime}`);
        console.log(`REMOTE READ: ${readExecTime}`);
    })
    .catch((err) => console.error('Error: ', err));
