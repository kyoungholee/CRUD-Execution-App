// crud를 이해하기 위한 server부분의 기능 및 
// app에 필요한 nodejs 연결과 데이터베이스 연결에 관한 걸 작성하고 
//어떻게 사용하고 무슨 경로로 app이 돌아가는지를 전반적이 설명하는 곳이다. 

const express = require('express');
const cors = require('cors');
const router = require('./routers');
const app = express();
const port = 4000;

const {connect : dbConnect} = require('./models');

dbConnect();

app.set('views engine', 'ejs');
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);


app.use(express.json());
app.use(express.urlencoded({
    extended : true,
})
  );
app.use(cors);
const cookieParser = require('cookie-parser');
app.use(cookieParser());


const cookieSession = require('cookie-session')


app.use(
  cookieSession({
    name : 'session',
    keys : ['secretValue'],
    maxAge : 24 * 60 * 60 * 1000, 
  },
})
);

app.use(express.static('public'));

app.use('/api', router);
app.get('/', (req, res) => {
  res.render('index.html');
});

app.listen(port, () => {

})





