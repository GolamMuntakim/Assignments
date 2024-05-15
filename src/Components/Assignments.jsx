
import { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
// import { getDate } from 'date-fns';
import { AuthContext } from '../Providers/AuthProvider';

const Assignments = () => {
    const [assignments, setAssignments] = useState([])
    console.log(assignments)
    const [selectedDifficulty, setSelectedDifficulty] = useState('')
    const {user} = useContext(AuthContext)

    useEffect(()=>{

        getData()
    },[])

    const getData = async () =>{
        const {data} = await axios(`${import.meta.env.VITE_API_URL}/assignments`)
       
        setAssignments(data)
    }

    const handleDelete= async email =>{
        try{
            const assignmentDelete = assignments.find(assignment => assignment.maker.email === email)
            if(user.email !== assignmentDelete.maker.email){
                return toast.error("sorry!only maker can delete it")
            }
            const {data} = await axios.delete(`${import.meta.env.VITE_API_URL}/deleteassignment/${email}`,{
                withCredentials:true
            })
            console.log(data)
            toast.success('Deleted Succesfully')
            getData()
        }catch(err){
            console.log(err.message)
            toast.error(err.message)
        }
    }
    const handlesortby = (difficulty) =>{
        setSelectedDifficulty(difficulty)
    }
    const filtered = selectedDifficulty? assignments.filter(assignment=>assignment.difficulty_level === selectedDifficulty) : assignments
    return (
        <div className='w-[1260px] mx-auto'>
             <div className="mt-8">
                <h1 className='text-4xl font-bold text-center'></h1>
                <div className="flex justify-center">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn m-1" >Sort By Difficulty level</div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><button onClick={()=>handlesortby('Easy')}>Easy</button></li>
                            <li><button onClick={()=>handlesortby('Medium')}>Medium</button></li>
                            <li><button onClick={()=>handlesortby('Hard')}>Hard</button></li>
                        </ul>
                    </div>
                </div>
                </div>

            <div className='grid grid-cols-3 gap-4 mt-8 w-[1260px] mx-auto'>
        {
            filtered.map(assignment=> (
                <div key={assignment._id} className="card w-96 bg-base-100 shadow-xl">
<figure><img src={assignment.thumbnail_image_url} alt="Shoes" /></figure>
<div className="card-body">
<h2 className="card-title">{assignment.title}</h2>
<p>Deadline: {new Date(assignment.due_date).toLocaleDateString() }</p>
<p>Marks: {assignment.marks}</p>
<p>Difficulty: {assignment.difficulty_level}</p>
<p>{assignment.description}</p>
<div className="card-actions justify-end">

        <button onClick={()=>handleDelete(assignment.maker.email)} className="btn ">Delete</button>
        
        <Link to={`/updateassignments/${assignment._id}`}><button className="btn ">Update</button></Link>
   
  <Link to={`/viewassignmengts/${assignment._id}`}><button className="btn btn-primary">View Assignments</button></Link>
</div>
</div>
</div>
            ))
        }
    </div>
        </div>
    );
};

export default Assignments;