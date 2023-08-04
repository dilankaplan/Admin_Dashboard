import ChartBox from '../../components/chartbox/ChartBox'
import Topbox from '../../components/topbox/Topbox'
import BarChartBox from '../../components/barChartBox/BarChartBox'
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from '../../data'
import './home.scss'
import PieChartBox from '../../components/pieChatBox/PieChartBox'
import BigChartBox from '../../components/bigChartBox/BigChartBox'

const Home = () => {
  return (
    <div className="home">
      <div className='box box1'>
        <Topbox />
        
      </div>
      <div className='box box2'>
        <ChartBox {...chartBoxUser}/>
      </div>
      <div className='box box3'><ChartBox {...chartBoxProduct}  /></div>
      <div className='box box4'><PieChartBox/> </div>
      <div className='box box5'><ChartBox {...chartBoxRevenue}/></div>
      <div className='box box6'><ChartBox {...chartBoxConversion}/></div>
      <div className='box box7'>< BigChartBox/></div>
      <div className='box box8'> <BarChartBox {...barChartBoxVisit}/></div>
      <div className='box box9'> <BarChartBox {...barChartBoxRevenue}/></div>
    </div>
  )
}

export default Home