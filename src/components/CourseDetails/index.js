import {Component} from 'react'

class CourseDetails extends Component {
  state = {blogData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/te/courses/${id}`)
    const data = await response.json()
    console.log(data.course_details)

    const updatedData = {
      id: data.course_details.id,
      name: data.course_details.name,
      imageUrl: data.course_details.image_url,
      description: data.course_details.description,
    }
    this.setState({blogData: updatedData, isLoading: false})
  }

  render() {
    const {blogData} = this.state
    const {name, description, imageUrl} = blogData

    return (
      <div>
        <div>
          <img src={imageUrl} alt={name} />

          <h1>{name}</h1>
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

export default CourseDetails
