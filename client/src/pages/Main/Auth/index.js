import {Route} from 'react-router-dom';
import Signinup from '../../components/Siginup';

function Auth () {
    return ( 
        <Route path = '/auth/sigin'>
            <Signinup isSignin />
        </Route>

        <Route path ='/auth/signup'>
            <Signinup isSignin = {false} />
        </Route>
        
    );
}

export default Auth; 