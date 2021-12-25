import { Fragment, useContext, useState } from "react";
import { Link,useHistory} from "react-router-dom";
import { firebaseContext } from "../store/context";
import './Register.css';

const Register = ()=>{
   
    const [Name,setName] = useState('');
    const [Email,setEmail] = useState('');
    const [Password,setPassword] = useState('');

    const {firebase} = useContext(firebaseContext);
    const history = useHistory();
    
    const submitHandler = (e)=>{
        e.preventDefault();

        firebase.auth().createUserWithEmailAndPassword(Email,Password).then(result=>{
            result.user.updateProfile({displayName:Name}).then(()=>{
                history.push('/login')
            })
        })
        
        setName('');
        setEmail('');
        setPassword('');
    }

    return(
        <Fragment>
            <div className="banner-login-1">
                <div className="shadow"></div>
                <form action="" className="register" onSubmit={submitHandler}>
                <img src="https://logodownload.org/wp-content/uploads/2018/07/prime-video-1.png" alt="" />
                <input  type="text" 
                        placeholder="Enter Name" 
                        className="form-control"
                        value={Name}
                        onChange={(e)=>setName(e.target.value)}/>

                <input  type="email" 
                        placeholder="Enter Email" 
                        className="form-control"
                        value={Email}
                        onChange={(e)=>setEmail(e.target.value)}/>

                <input  type="password" 
                        placeholder="Enter Password" 
                        className="form-control"
                        value={Password}
                        onChange={(e)=>setPassword(e.target.value)}/>

                <input type="submit"  value="Create Your Prime Account"/>
                <Link to="/login" className="link">Already have an account? Sign-In </Link>
            </form>
            </div>
        </Fragment>
    )
}
export default Register;