import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { ReachContextHook } from '../context/CommonContext';

export default function SignUp(){
    const {awsUser,SetAwsUser} = ReachContextHook()
    const router = useRouter()
    const nm = useRef()
    const em = useRef()
    const ps = useRef()
    const pn = useRef()
    async function sUp () {
        console.log("Click:")
        const username = em.current.value
        const name = nm.current.value
        const password = ps.current.value
        const phone_number = pn.current.value
        const email = em.current.value

        try {
            const { user } = await Auth.signUp({ 
                username,
                password,
                attributes:{
                    email,
                    phone_number,
                    name
                },
                autoSignIn:{
                    enabled: true,
                }
            });
            console.log(user);
            if(user){
                router.push({
                    pathname:"/login",
                    query:{signup:"CS"}
                })
                SetAwsUser(user)
            }
        } catch (error) {
            console.log('error signing up:', error.code);
            console.log('error signing up:', error.message);
        }
    }
    return (
        <>
<div className="box-rounded padding40" style={{textAlign: "center", backgroundSize: "cover"}}>
<h3 className="mb10">Sign Up</h3>
<p style={{color: "#2A2A2A"}}>Signup to purchase and view your tickets</p>
<div name="contactForm" id="contact_form" className="form-border" method="post" action="blank.php">
<div className="field-set" style={{backgroundSize: "cover"}}>
<input type="text" name="email" id="email" className="form-control" placeholder="Email" ref={em}/>
</div>
<div className="field-set" style={{backgroundSize: "cover"}}>
<input type="text" name="name" id="name" className="form-control" placeholder="name" ref={nm}/>
</div>
<div className="field-set" style={{backgroundSize: "cover"}}>
<input type="password" name="password" id="password" className="form-control" placeholder="password" ref={ps}/>
</div>
<div className="field-set" style={{backgroundSize: "cover"}}>
<input type="tel" name="tel" id="tel" className="form-control" placeholder="+254" ref={pn}/>
</div>
<div className="field-set" style={{backgroundSize: "cover"}}>
<button id="send_message" onClick={()=>{sUp()}}
className="btn btn-main btn-fullwidth color-2" style={{backgroundColor: "#18D8B3"}}>Submit</button>
</div>
<div className="clearfix" style={{backgroundSize: "cover"}}></div>
<div className="spacer-single" style={{backgroundSize: "cover"}}></div>
<ul className="list s3">
<li>Login with:</li>
<li><a style={{color:"#18D8B3"}} href="#">Facebook</a></li>
<li><a style={{color:"#18D8B3"}} href="#">Google</a></li>
</ul>
</div>
</div>
        </>
    )
}