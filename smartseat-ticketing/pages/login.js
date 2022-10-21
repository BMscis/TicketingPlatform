import { useRouter } from "next/router";
import ConfirmSignUp from "../components/ConfirmSignUp";
import Main from "../components/Main";
import SignIn from "../components/SignIn";
import SignUp from "../components/signup";

export default function login(){
    const router = useRouter()
    const signup = router.query.signup
    let sp
    switch (signup) {
        case "CS":
            sp = <ConfirmSignUp></ConfirmSignUp>
            break;
        case "SU":
            sp = <SignUp></SignUp>
            break;
        case "LI":
            sp = <SignIn></SignIn>
            break;
        default:
            sp = <SignUp></SignUp>
            break;
    }
    console.log("Signup: ", signup)
    return (
        <Main>
            <div className="overlay-gradient t50" style={{backgroundSize: "cover"}}>
					<div className="center-y relative" style={{backgroundSize: "cover"}}>
						<div className="container" style={{backgroundSize: "cover"}}>
							<div className="row align-items-center" style={{backgroundSize: "cover"}}>
								<div className="col-lg-6 offset-lg-3 wow fadeIn animated" data-wow-delay=".5s" 
                                style={{backgroundSize: "cover", visibility: "visible", animationDelay: "0.5s", animationName: "fadeIn"}}>
                                    {sp}
								</div>
							</div>
						</div>
					</div>
				</div>
        </Main>
    )
}