import {Link, useMatch, useResolvedPath} from "react-router-dom"
export default function Navbar() {
    return (
        <div className="nav">
            <Link to="/" className="title">Southern Girl in Tech</Link>
            <ul>
                <CustomLink to="/Intro" > Introduction</CustomLink>
                <CustomLink to="/Tech" > Tech Talk</CustomLink>
                <CustomLink to="/Projects" > Projects</CustomLink>

            </ul>
           
        </div>
        

            )
            function CustomLink({ to,children, ...props }){
              const resolvedPath =useResolvedPath(to)
              const isActive = useMatch({ path: resolvedPath.pathname, end:true})
        
                return(
                    <li className={isActive ? "active" : ""}>
                    <Link to={to}{...props} >{children} </Link>
                    </li>


                )
            }
}