import {
  Navigate
} from 'react-router-dom';
import { authClass } from '@ptg-react-app/auth/services/auth.service';
  
  const PublicRoute=({ children}:{children:JSX.Element})=> {

    const auth = authClass.getToken();
      console.log('props:',auth);
    return (
        auth
        ? <Navigate to='/calendar'/>
        : children

    );
  }

  export default PublicRoute;