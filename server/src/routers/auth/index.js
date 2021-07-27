const express = require("express");
const router = express.Router();
const User = require('../../models/user');


const {validUser} = require('../../middleware/user');


//회원가입 로직이다. 
router.post('/', async(req, res) => {
  // 입력된 정보가 다 안들어 오면 에러는 보내라 ~  

  if (!req.body.location || !req.body.username ||
    res.body.password)
      return res.status(400).send({
      message: 'location, username and password are required',
    });


  try { 
    const existingUser = await User.findOne({
      username : req.body.username,
    });

    //이미 존재하고 있다면 에러 메세지를 출력해라 
    if (existingUser)
    return res.status(403).send({
      message : 'username already exists',
    });

    const user = new User({
      username : req.body.username,
      password : req.body.password,
      location : req.body.locationm
    });
    await user.save();
  
    //회원가입이 완료가 되면 바로 로그인이 되도록 해준다.
    req.session.userID = user_id;

    //생성된 user정보를 보낸다.
    return res.send({
      user : user,
    });
  } catch() {
    return res.sendStatus(500);

  }
});

//로그인 로직 
router.post('/login', async (req, res) => {

  if (!req.body.username || !req.body.password) 
  return res.sendStatus(400);

  try { 
    const user = await User.findOne({
      username : req.body.username,
    });
    if (!user) {
      retrun res.status(403).send{(
        message : 'username or password is wrong',
      });
      req.session.userID = user._id;
      return res.send{(
        user : user,
      )};
    }
  } catch() {

  }
})

router.get('/' validUser, async (req, res) => {
  try { 
    res.send({
      user: req.user,
    });
  } catch(err) {
    consol.log (error)
    return res.sendStatus(500);
  }
});


//로그아웃 로직 
router.delete('/', validUser, async(req, res) => {
  try {
    req.session = null;
    req.sendStatus(200);
  } catch () {
    return res.sendStatus(500);
  }
})


//post 등록 및 전송 
//get 조회 