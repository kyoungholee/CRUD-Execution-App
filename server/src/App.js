const express = require('express');
const cors = require('cors');
 //리소스에 접근 할 수 있게 권한을 부여할 수 있도록 웹브라우에 알려주는 기능이다.

const router = require('./routers');
const { connect } = require('mongoose');
const app = express();
const port = 4000;


const {connect :dbConnect} = require('./models');
dbConnect();


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


app.use(express.json());
app.use(
  express.urlencoded({
    extended :true,
  })
);
app.use(cors()); //접근 권한 부여 


//cookie에 전달되어 오는 정보를 req.session을 통해 사용 할 수 있게 파싱해준다.
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// front에는 user정보를 cookie에 담고
// backend에는 user정보를 session에 담아서 쓰기 위한 설정이다.

const cookieSession = require('cookie-session');
app.use(
  cookieSession({
    name: 'session',
    keys : ['secrestValue'],
    cookie: {
      maxAge : 24 * 60 * 60 * 1000, //24시간 하루라는 뜻 !!
    },
  })
);

app.use(express.static('public'));
app.use('/api', router);
app.get('/', (req,res) => {
  res.render('index.html');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);


});



