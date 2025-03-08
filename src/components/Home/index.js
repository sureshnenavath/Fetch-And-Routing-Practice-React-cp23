import './index.css'
import BlogList from '../BlogList'
import UserInfo from '../UserInfo'

const Home = () => (
  <div className="home-container" data-testid="loader">
    <UserInfo />
    <BlogList />
  </div>
)

export default Home
