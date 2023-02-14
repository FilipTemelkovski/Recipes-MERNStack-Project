import React,{useContext} from 'react';
import { UserContext } from '../../context/UserContext'; 

export const LoginForm = () => {

  const {getLoginFormValues, handleLoginUserSubmit} = useContext(UserContext);

  return (
    <form>
        <div>
            <label>Email</label>
                <input 
                type='email'
                placeholder='user@domain.com'
                name='email'
                onChange={getLoginFormValues}
                />
        </div>
        <div>
            <label>Password</label>
            <input 
            type='password'
            placeholder='******'
            name='password'
            onChange={getLoginFormValues}
            />
        </div>
        <div>
          <button onClick={handleLoginUserSubmit} >LOGIN</button>
        </div>
    </form>
  )
}
