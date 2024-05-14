import { useContext, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";

const UpdateAssignment = () => {
    const assignments = useLoaderData()
    console.log(assignments)
    const navigate = useNavigate()
    const {user} = useContext(AuthContext)
    
    const {_id,
        title,
        thumbnail_image_url,
        marks,
        due_date,
        difficulty_level,
        description
    } = assignments||{}
    const [startDate, setStartDate] = useState( new Date(due_date)  ||new Date());
    const handleFormSubmit = async e=>{
        e.preventDefault()
        const form = e.target 
        const title = form.title.value
        const email = user?.email
        const due_date = startDate
        const difficulty_level = form.category.value
        const thumbnail_image_url = form.url.value 
        const marks = parseFloat(form.marks.value) 
        const description = form.description.value 
        const assignmentdata={
            title,
            due_date,
            difficulty_level,
            thumbnail_image_url,
            marks,
            description,
            maker:{
                email,
                name:user?.displayName, 
                photo:user?.photoURL
            }
    }
    try{
        const {data} = await axios.put(`${import.meta.env.VITE_API_URL}/updateassignment/${_id}`,assignmentdata)
        console.log(data)
        toast.success('Assignment Data updated Succesfully')
        navigate('/assignmentsPage')
    }catch(err){
        console.log(err)
        toast.error(err.message)
    }
}
    return (
        <div>
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
 <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
   <h2 className='text-lg font-semibold text-gray-700 capitalize '>
     Update Your assignments
   </h2>

   <form onSubmit={handleFormSubmit}>
     <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
       <div>
         <label className='text-gray-700 ' htmlFor='job_title'>
           Assignments Title
         </label>
         <input
           // id='job_title'
           name='title'
           type='text'
           className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
           required
         />
       </div>

       <div>
         <label className='text-gray-700 ' htmlFor='emailAddress'>
           Thumbnail URL
         </label>
         <input
           // id='emailAddress'
           type='text'
           name='url'
           className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
           required
         />
       </div>
       <div className='flex flex-col gap-2 '>
         <label className='text-gray-700'>Due Date</label>

         {/* Date Picker Input Field */}
         <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
       </div>

       <div className='flex flex-col gap-2 '>
         <label className='text-gray-700 ' htmlFor='category'>
           Difficulty Level
         </label>
         <select
           name='category'
           id='category'
           className='border p-2 rounded-md'
           required
         >
           <option value='Easy'>Easy</option>
           <option value='Medium'>Medium</option>
           <option value='Hard'>Hard</option>
         </select>
       </div>
       <div>
         <label className='text-gray-700 ' htmlFor='min_price'>
           Marks
         </label>
         <input
           // id='min_price'
           name='marks'
           type='number'
           className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
           required
         />
       </div>

       {/* <div>
         <label className='text-gray-700 ' htmlFor='max_price'>
           Maximum Price
         </label>
         <input
           id='max_price'
           name='max_price'
           type='number'
           className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
         />
       </div> */}
     </div>
     <div className='flex flex-col gap-2 mt-4'>
       <label className='text-gray-700 ' htmlFor='description'>
         Description
       </label>
       <textarea
         className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
         name='description'
         id='description'
         required
       ></textarea>
     </div>
     <div className='flex justify-end mt-6'>
       <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
        Update
       </button>
     </div>
   </form>
 </section>
</div>
   </div>
    );
};

export default UpdateAssignment;