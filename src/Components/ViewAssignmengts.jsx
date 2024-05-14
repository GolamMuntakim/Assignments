import { Link, useLoaderData } from "react-router-dom";


const ViewAssignmengts = () => {
    const assignments = useLoaderData()
    console.log(assignments)
    return (
        <div>
            <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-900 text-gray-100">
	<div className="flex space-x-4">
		<img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-12 h-12 rounded-full shadow bg-gray-500" />
		<div className="flex flex-col space-y-1">
			<a rel="noopener noreferrer" href="#" className="text-sm font-semibold">Leroy Jenkins</a>
			<span className="text-xs text-gray-400">4 hours ago</span>
		</div>
	</div>
	<div>
		<img src="https://source.unsplash.com/random/100x100/?5" alt="" className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500" />
		<h2 className="mb-1 text-xl font-semibold">{assignments.title}</h2>
		<p className="text-sm text-gray-400">Eu qualisque aliquando mel, id lorem detraxit nec, ad elit minimum pri. Illum ipsum detracto ne cum. Mundi nemore te ius, vim ad illud atqui apeirian...</p>
	</div>
	<div className="flex flex-wrap justify-between">
		
		<div className="flex space-x-2 text-sm text-gray-400">
			<Link to={`/takeassignments/${assignments._id}`}><button className="btn ">Take Assignments</button></Link>
		</div>
	</div>
</div>
        </div>
    );
};

export default ViewAssignmengts;