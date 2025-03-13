/**
 * @since March 2022
 * @author Harsha Zalawa
 * @uses Reusable method to filter visiblity of components depending upon Role.
 * 
*/
import { authClass } from '../../auth/services/auth.service';

const allowdRoles:any = ['admin','supervisor'];

export const Role:any = () => {

  //get login user role
  const role = authClass.getRole();
   if(allowdRoles.indexOf(role) > -1)
   {
       return true;
   }  
   return false;
}