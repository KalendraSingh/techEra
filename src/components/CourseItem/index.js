import {Link} from 'react-router-dom'

const CourseItem = props => {
  const {eachDetails} = props
  const {id, name, imageUrl} = eachDetails
  console.log(id)
  return (
    <Link to={`/courses/${id}`}>
      <div>
        <div>
          <img src={imageUrl} alt={name} />
          <p>{name}</p>
        </div>
      </div>
    </Link>
  )
}

export default CourseItem
