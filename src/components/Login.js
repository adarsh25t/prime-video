import { Fragment ,useContext,useState} from "react";
import { Link ,useHistory} from "react-router-dom";
import { firebaseContext } from "../store/context";

import './Register.css';

const Login = ()=>{

    const [Email,setEmail] = useState('');
    const [Password,setPassword] = useState('');

    const {firebase} = useContext(firebaseContext);
    const history = useHistory();

    const submitHandler = (e)=>{
        e.preventDefault();

        firebase.auth().signInWithEmailAndPassword(Email,Password).then(result=>{
            history.push("/");
        }).catch(error=>{
            alert(error)
        })

        setEmail('');
        setPassword('');
    }

    return(
        <Fragment>
            <form action="" className="register" onSubmit={submitHandler}>
                <img src="https://logodownload.org/wp-content/uploads/2018/07/prime-video-logo-0.png" alt="" />
                <input  type="email" 
                        placeholder="Enter Email" 
                        className="form-control"
                        value={Email}
                        onChange={(e)=>setEmail(e.target.value)}
                        />

                <input  type="password" 
                        placeholder="Enter Password" 
                        className="form-control" 
                        value={Password}
                        onChange={(e)=>setPassword(e.target.value)}
                        />

                <input type="submit"  value="Sigin In Your Prime Account"/>
                <Link to="/register" className="link">Create your Prime video account </Link>
            </form>
        </Fragment>
    )
}
export default Login;