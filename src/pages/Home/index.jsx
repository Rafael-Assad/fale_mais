import Banner from '../../components/Banner'
import CardField from '../../components/CardField'
import MainField from '../../components/MainField'

import {mockData} from '../../mock/mock'

const Home = () => {
  return (
    <MainField>
      <Banner/>
      <CardField plansMock={mockData}/>
    </MainField>
  )
}

export default Home