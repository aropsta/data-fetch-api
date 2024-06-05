import Item from "../ProductItem"
import "../../styles/home.scss"
import { Outlet } from "react-router";


export default function Users(){
  //  const [breakPoint, isBreakPoint] = useState();

  //dynamically set variables that change css for mobile/desktop/laptop
  //useEffect(() => { breakPointObserver(breakPoints, isBreakPoint); }, [breakPoint]);


return(
   <main className="user-main"> 
      <h1>Users</h1>
      <Outlet></Outlet>
      </main>
  )
}
