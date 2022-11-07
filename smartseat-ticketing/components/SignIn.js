import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { ReachContextHook } from '../context/CommonContext';
import Link from 'next/link';

export default function SignIn(){
    //console.log("SIGNUP: ")
    const {awsUser,SetAwsUser} = ReachContextHook()
    const router = useRouter()
    //console.log({router})
    const nm = useRef()
    const em = useRef()
    const ps = useRef()
    const pn = useRef()
    async function sIn () {
        //console.log("Click:")
        const username = em.current.value
        const password = ps.current.value
        try {
            const user = await Auth.signIn(username,password);
            //console.log(user);
            if(user){
                SetAwsUser(user)
                // router.push({
                //     pathname:"/Home"
                // })
                router.back()
            }
        } catch (error) {
            //console.log('error signing up:', error.code);
            //console.log('error signing up:', error.message);
        }
    }
    return (
        <>
<div className="box-rounded padding40" style={{textAlign: "center", backgroundSize: "cover"}}>
<h3 className="mb10">Sign In</h3>
<p style={{color: "#2A2A2A"}}>Login to purchase and view your tickets</p>
<div name="contactForm" id="contact_form" className="form-border" method="post" action="blank.php">

<div className="field-set" style={{backgroundSize: "cover"}}>
<input type="text" name="email" id="email" className="form-control" placeholder="Email" ref={em}/>
</div>

<div className="field-set" style={{backgroundSize: "cover"}}>
<input type="password" name="password" id="password" className="form-control" placeholder="password" ref={ps}/>
</div>

<div className="field-set" style={{backgroundSize: "cover"}}>
<button id="send_message" onClick={()=>{sIn()}}
className="btn btn-main btn-fullwidth color-2" style={{backgroundColor: "#18D8B3"}}>Submit</button>
</div>

<div className="clearfix" style={{backgroundSize: "cover"}}></div>

<div className="spacer-single" style={{backgroundSize: "cover"}}></div>
<ul className="list s3">
<li>Login with:</li>
<li><a style={{color:"#18D8B3"}} href="#">Facebook</a></li>
<li><a style={{color:"#18D8B3"}} href="#">Google</a></li>
</ul>
<br/>
<ul className="list s3">
<li>Don't have an account ?</li>
<li><Link style={{color:"#18D8B3"}} href={{pathname:"/login",query:{signup:"SU"}}}>Sign UP</Link></li>
</ul>
</div>
</div>
        </>
    )
}