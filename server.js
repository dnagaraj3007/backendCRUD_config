import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dbConfig from './src/config/database.config';
import routes from './src/routes/note.routes';

mongoose
  .connect(dbConfig.url, {'useUnifiedTopology': true, 'useNewUrlParser': true})
  .then(() => {
    console.log('Successfully connected to database');
  })
  .catch((err) => {
    console.log('Error connecting to database', err);
    process.exit();
  });
mongoose.set('useFindAndModify', false);


const app = express();

app.use(bodyParser.json());

app.use('/api', routes);

app.use(bodyParser.urlencoded({'extended': true}));


app.get('/', (req, res) => {
  res.status(200).json({'message': 'Welcome to application'});
});

module.exports = app;
export default app;
