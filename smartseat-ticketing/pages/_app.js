import '../styles/globals.css'
//import '../public/css/style.module.css'
import "../styles/bootstrap.min.css"
import "../styles/plugins.css"
import "../styles/colors/scheme-02.css"
import "../styles/coloring.css"
import CommonContext from '../context/CommonContext'
import UseWindowDimensions from '../context/Dimensions'
import SetDimension from '../context/SetDimension'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CommonContext>
        <UseWindowDimensions>
          <SetDimension>
            <Component {...pageProps} />
          </SetDimension>
        </UseWindowDimensions>
      </CommonContext>
    </>
  )
}

export default MyApp
