import TopBar from './components/TopBar'
import Footer from './components/Footer'
import Content from './components/Content'
import data from './components/data.json'
import BettingDataList from './components/BettingDataList'

function App() {
  const jsonData = []
  return (
    <div className="min-h-screen bg-slate-800">
    <TopBar/>
    <BettingDataList/>
    <Footer/>
    </div>
  )
}

export default App
