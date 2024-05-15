import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";


const ViewAssignmengts = () => {
    const assignments = useLoaderData()
	
	console.log(assignments)
    
    return (
        <div>
			<Helmet>
				<title>
					View Assignemnt 
				</title>
			</Helmet>
            <div className="flex flex-col w-[350px] md:w-[400px] lg:w-[1260px] mx-auto mt-8 p-6 space-y-6 overflow-hidden  shadow-md bg-black text-gray-100">
	<div className="flex space-x-4">
		<img alt="" src={assignments.maker.photo} className="object-cover w-12 h-12 rounded-full shadow bg-gray-500" />
		<div className="flex flex-col space-y-1">
			<a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{assignments.maker.name}</a>
		</div>
	</div>
	<div>
		<img src={assignments.thumbnail_image_url} alt="" className="object-cover  w-full mb-4 h-60 sm:h-96 bg-gray-500" />
		<h2 className="mb-1 text-xl font-semibold">{assignments.title}</h2>
		<p className="text-sm text-white">{assignments.description}</p>
	</div>
	<div className="flex flex-wrap justify-between">
		
		<div className="flex space-x-2 text-sm text-gray-400">
			<Link to={`/takeassignments/${assignments._id}`}><button className="btn bg-green-800 text-white border-none">Take Assignments</button></Link>
		</div>
	</div>
</div>
        </div>
    );
};

export default ViewAssignmengts;