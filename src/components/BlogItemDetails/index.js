// Write your JS code here
import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const blogItemDetailsApiUrl = 'https://apis.ccbp.in/blogs'
class BlogItemDetails extends Component {
  state = {
    blogData: [],
    isBlogItemDetailsLoading: true,
  }
  componentDidMount() {
    this.getData()
  }
  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`${blogItemDetailsApiUrl}/${id}`)
    const data = await response.json()
    const newData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      topic: data.topic,
    }
    this.setState({blogData: newData, isBlogItemDetailsLoading: false})
  }

  renderBlogItemDetails = () => {
    const {isBlogItemDetailsLoading, blogData} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogData
    return isBlogItemDetailsLoading ? (
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    ) : (
      <div className="blog-info">
        <h2 className="blog-details-title">{title}</h2>

        <div className="author-details">
          <img className="author-pic" src={avatarUrl} alt={author} />
          <p className="details-author-name">{author}</p>
        </div>

        <img className="blog-image" src={imageUrl} alt={title} />
        <p className="blog-content">{content}</p>
      </div>
    )
  }

  render() {
    return <div className="blog-container">{this.renderBlogItemDetails()}</div>
  }
}

export default BlogItemDetails
