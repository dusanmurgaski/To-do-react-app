import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>NOT FOUND SORRY</h2>
            <p>that page cannot be found</p>
            <Link to="/"> back to the homepage...</Link>
        </div>
     );
}
 
export default NotFound;