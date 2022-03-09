import express from 'express';
import swaggerUI from 'swagger-ui-express';
import specs from './swagger';
import cors from 'cors';
import router from './routes';

require('dotenv').config();

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));
app.use(cors());
app.use('/', router);

app.listen(4000, () => {
    console.log('Server started 🚀');
});
