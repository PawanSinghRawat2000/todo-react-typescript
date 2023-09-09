import { Link } from "react-router-dom"
import {useSearchParams} from 'react-router-dom'

const Navbar = () => {
    const [searchParams] = useSearchParams();
    let todos̥Data = searchParams.get("todos");
  return (
    <nav>
      <Link to='/' className={todos̥Data === null ? "active" : ""}>All</Link>
      <Link to='/?todos=active'>Active</Link>
      <Link to='/?todos=completed'>Completed</Link>
    </nav>
  )
}

export default Navbar
