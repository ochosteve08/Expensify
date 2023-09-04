import { useRouteError,Link, useNavigate } from "react-router-dom"
 import { FaHome, FaArrowAltCircleLeft } from "react-icons/fa";

 const Error = () => {
  const navigate  =useNavigate()
 const error = useRouteError()

   return (
     <div className="error">
       <h1>Uh oh! we&apos;ve got a problem</h1>
       <p>{error?.message || error?.statusText}</p>
       <div className="flex-md">
         <button className="btn btn--dark" onClick={() => navigate(-1)}>
           <FaArrowAltCircleLeft /> <span>Go Back</span>
         </button>
         <Link to={"/"} className="btn btn--dark">
           <span>
             {" "}
             <FaHome /> Go Home
           </span>
         </Link>
       </div>
     </div>
   );
 }
 
 export default Error