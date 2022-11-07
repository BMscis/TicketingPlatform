import { useRouter } from "next/router"
import Main from "../../components/Main"

export default function Wrapper({content}) {
  const router = useRouter()
  if(process.browser){
    if(!content.props.parent.context.awsUser){
      router.push({
          pathname:"/login",
          query:{signup:"LI"}
      })
  }
  if (!content.props.parent.context.hasUser) {
      router.push("/Wallet")
  }
  }
  return (
    <Main>
  {content}
    </Main>
  )}