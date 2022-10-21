import '../styles/globals.css'
import {Amplify} from 'aws-amplify'
import awsExports from "../smartseat-ticketing/aws-exports"
import "../styles/bootstrap.min.css"
import "../styles/plugins.css"
import "../styles/colors/scheme-02.css"
import "../styles/coloring.css"
import CommonContext from '../context/CommonContext'
import UseWindowDimensions from '../context/Dimensions'
import SetDimension from '../context/SetDimension'
import CREATELISTENER from '../data/socket'
Amplify.configure(awsExports)
function MyApp({ Component, pageProps }) {
  return (
    <>
        <CommonContext>
          <CREATELISTENER>
            <UseWindowDimensions>
              <SetDimension>
                <Component {...pageProps} />
              </SetDimension>
            </UseWindowDimensions>
          </CREATELISTENER>
        </CommonContext>
    </>
  )
}

export default MyApp
