import { useRouter } from "next/router"
import Main from "../../components/Main"

export default function Wrapper({content}) {
  console.log("CONSOLE")
  
  return (
    <>
  {content}
    </>
  )}