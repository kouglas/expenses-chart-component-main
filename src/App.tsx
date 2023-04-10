// import { useState } from 'react'

import BarChart from "./BarChart"
// import ChartSummary from "./ChartSummary"
import Footer from "./Footer"
import Header from "./Header"

function App() {
  
  return (
    <div className="App w-1/2  mr-auto ml-auto mt-40 bor">
      <Header />
      <br />
      <BarChart />
      <br />
      <Footer />
      {/* typescript and tailwind seem to be configured correctly 
      upvote this response on stackoverflow: https://stackoverflow.com/questions/57422458/error-ts6059-file-is-not-under-rootdir-rootdir-is-expected-to-contain-al
      clean up your directories ex: removing index.ts and it's map counter part
      label the components and then work out a plan. great job so far
      don't forget to make a repository for this project
       */}
    </div>
  )
}

export default App
