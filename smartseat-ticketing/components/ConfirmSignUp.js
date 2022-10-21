import { Auth } from "aws-amplify"
import { useRouter } from "next/router"
import { useRef } from "react"
import { ReachContextHook } from "../context/CommonContext"

export default function ConfirmSignUp(){
    const {awsUser,SetAwsUser} = ReachContextHook()
    const router = useRouter()
    const cd = useRef()
    const em = useRef()
    async function confirm () {
        console.log("Confirm:")
        const username = em.current.value
        const code = cd.current.value
        try {
            const { confirmation } = await Auth.confirmSignUp(username, code);
            console.log(confirmation);
            router.push("/Home")

        } catch (error) {
            console.log('error signing up:', error.code);
            console.log('error signing up:', error.message);
        }
    }
    return (
        <>
<div className="box-rounded padding40" style={{textAlign: "center", backgroundSize: "cover"}}>
<h3 className="mb10">Enter Confirmation Code</h3>
<p style={{color: "#2A2A2A"}}>Signup to purchase and view your tickets</p>
<div name="contactForm" id="contact_form" className="form-border" method="post" action="blank.php">

<div className="field-set" style={{backgroundSize: "cover"}}>
<input type="text" name="email" id="email" className="form-control" placeholder="Email" ref={em}/>
</div>

<div className="field-set" style={{backgroundSize: "cover"}}>
<input type="number" name="code" id="code" className="form-control" placeholder="code" ref={cd}/>
</div>

<div className="field-set" style={{backgroundSize: "cover"}}>
<button id="send_message" onClick={()=>{confirm()}}
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