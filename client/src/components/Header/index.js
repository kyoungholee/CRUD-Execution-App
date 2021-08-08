import axios from 'axios';
import {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {UserContext} from '../../App';



function Header() {
    const { user, dispatch} = useContext(UserContext);
    const history = useHistory();


    const signoutClickHandler = async() => {
    try{ 
        await axios.delete(`${process.env.REACT_APP_API_SERVER}/api/auth`);
        dispatch ({type : 'signout'});
    } catch(e) {
        console.error(e);
    }
};

  //로그인 이후 Mypage 로직 부분 
  const mypageClickHandler = async() => {
    try {
      await axios.post(`${process.env.REACT_APP_API_SERVER}/api/auth/mypage`);
      dispatch ({ type : 'mypage'});
    } catch(e) {
      console.error(e);
    }
  };

const username = user?.username !== '' ? user.username : '';


return (
    <div className='header'>
      <div>마케뜨~ </div>
      <div className='dropdown'>
        <button
          className = 'btn btn-secondary dropdown-toggle'
          type = 'button'
          id = 'dropdownMenu2'
          data-bs-toggle = 'dropdown'
          aria-expanded = 'false'
        >
          {username === '' ? '메뉴' : username}
        </button>
        <ul className='dropdown-menu' aria-labelledby='dropdownMenu2'>
          {username === '' && (
            <li>
              <button
                className='dropdown-item'
                type='button'
                onClick={() => {
                  history.push('/auth/signin');
                }}
              >
                로그인
              </button>
            </li>
          )}

           {username === '' && (
            <li>
              <button
                className='dropdown-item'
                type='button'
                onClick={() => {
                  history.push('/auth/signup');
                }}
              >
                회원가입
              </button>
            </li>
          )}
          
          {username !== '' && (
            <li>
              <button
                className='dropdown-item'
                type='button'
                onClick={signoutClickHandler}
              >
                로그아웃
              </button>
            </li>
          )}
          {username !== '' && (
            <li>
              <button
              className = 'my-best-page'
              type = 'button'
              onClick = {mypageClickHandler}>
                내정보
              </button>
            </li>
          )} 
        </ul>
      </div>
    </div>
  );
}

export default Header;
