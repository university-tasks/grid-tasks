import express from 'express';
import swaggerUI from 'swagger-ui-express';
import specs from './swagger';
import cors from 'cors';
import hash from './hash';
require('dotenv').config();

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));
app.use(cors());

app.listen(4000, () => {
    console.log('Server started 🚀');
});

app.get('/sha256/:text', (req, res) => {
    console.log('SHA256', req.params.text);
    return res.status(200).json(hash.sha256(req.params.text));
});

app.get('/streebog/:text', (req, res) => {
    console.log('STREEBOG', req.params.text);
    return res.status(200).json(hash.streebog(req.params.text));
});
