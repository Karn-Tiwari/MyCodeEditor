

import Header from './Header'
import Code from './Code'
import Result from './Result'
const Home=()=>{
  return (
   < >
    <Header/>
    <Code/>
    <Result/>
    </>
  )
}

export default Home
// <> </> is a React Fragment. It is used to wrap multiple elements in a page 
// without creating an extra div. It is a shorthand for <React.Fragment></React.Fragment>
// It uses less memory than a div.