import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CourseItem from '../CourseItem/index'

class Home extends Component {
  state = {travelData: [], isLoading: false}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const coursesApiUrl = 'https://apis.ccbp.in/te/courses'

    const fetchData = await fetch(coursesApiUrl)
    const data = await fetchData.json()

    const updatedData = data.courses.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      imageUrl: eachItem.logo_url,
    }))

    this.setState({travelData: updatedData, isLoading: true})

    console.log(data.packages[0].name)
  }

  render() {
    const {travelData, isLoading} = this.state

    console.log(travelData)
    return (
      <div>
        <h1>Courses</h1>
        <div>
          <div>
            <ul>
              {isLoading ? (
                travelData.map(eachDetails => (
                  <CourseItem key={eachDetails.id} eachDetails={eachDetails} />
                ))
              ) : (
                <div data-testid="loader">
                  <Loader
                    type="TailSpin"
                    color="#00BFFF"
                    height={50}
                    width={50}
                  />
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
