import * as express from 'express';
import * as mongoose from 'mongoose';
import * as cors from 'cors';
import userRoutes from './app/routers/user.routes';
import router from './app/routers/auth.routes';
import * as path from 'path';
import * as url from 'url';

const port = process.env.port || 8080;
const app = express();
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

app.all('/*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Key, Authorization'
  );
  res.header(
    'Access-Control-Allow-Methods',
    'POST, GET, OPTIONS, PUT, DELETE, PATCH'
  );
  next();
}); //


// main routes
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to interview-screening-backend!' });
});
app.use(express.static(path.join(__dirname, 'assets')));

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// using authentication routes
app.use('/', router);
app.use('/', userRoutes);
app.use('/files', express.static('assets'));
app.use(express.static(path.join(__dirname, 'assets')));

const username = encodeURIComponent('priyanshu');
const password = encodeURIComponent('priyanshu921');
const dbName = 'test';
mongoose
  .connect(
    `mongodb+srv://${username}:${password}@naruto.sf8tp46.mongodb.net/${dbName}?retryWrites=true&w=majority`
    // `mongodb+srv://${username}:${password}@atlascluster.27xfa.mongodb.net/${dbName}?retryWrites=true&w=majority`
  )
  .then((data) => {
    console.log('Database connected successfully:', data);
  })
  .catch((err) => console.log(err));

// fallback when refreshed browser
app.use('/', express.static(path.join(__dirname, 'public')));
app.get('*', (req, res) => {
  const pathname = url.parse(req.url).pathname;
  const pathArr = pathname.split('/');
  const apps = {
    'ptg-angular-app': 'ptg-angular-app',
    'ptg-react-app': 'ptg-react-app',
    'ptg-angular-doc-process': 'ptg-angular-doc-process',
    'ptg-angular-google-map': 'ptg-angular-google-map',
    'ptg-react-animations': 'ptg-react-animations',
    'ptg-ui-web-comp-angular': 'ptg-ui-web-comp-angular',
    'ptg-ui-web-comp-react': 'ptg-ui-web-comp-react',
  };
  const projectName = pathArr[1] && apps[pathArr[1]];
  if (projectName) {
    res.sendFile(path.join(__dirname, `public/${projectName}`) + '/index.html');
  } else {
    res.sendFile(path.join(__dirname, ``) + '/index.html');
  }
});
server.on('error', console.error);
