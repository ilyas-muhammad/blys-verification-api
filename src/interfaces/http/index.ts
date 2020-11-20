import express from 'express';
import cors from 'cors';
import { log } from '../../helper/logger';
import verificationBiz from '../../domain/verification';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (_, res) => {
  res.send('Blys Verification API');
});

app.post('/', async (req, res) => {
  log('info', 'client-request', req.body);
  const {
    code,
    status,
    message,
  } = await verificationBiz(req);

  res.status(code).json({ status, message });
});

app.set('port', (process.env.PORT || 4000));

app.listen(app.get('port'), () => {
  log('info', `Server is running on PORT: ${app.get('port')}`);
});
