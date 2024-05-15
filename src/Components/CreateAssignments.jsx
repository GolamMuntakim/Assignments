import { useContext, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const CreateAssignments = () => {
    const {user} = useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date());
    const navigate = useNavigate()
    const handleFormSubmit = async e =>{
        e.preventDefault()
        const form = e.target
        const title = form.title.value
        const email = user?.email
        const due_date = startDate
        const difficulty_level = form.category.value
        const thumbnail_image_url = form.url.value 
        const marks = parseFloat(form.marks.value) 
        const description = form.description.value 
        if (marks <30){
          return toast.error("Marks cannot be less than 30")
        }
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
            const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/assignment`, assignmentdata)
            console.log(data)
            toast.success('Assignment added succesfully')
            navigate('/assignmentsPage')
        }catch(err){
            console.log(err)
        }
    }
    return (
        <div>
          <Helmet>
            <title>
              Create Assignemnt
            </title>
          </Helmet>
             <div className='flex justify-center w-[350px] md:w-[400px] mx-auto lg:w-[1260px] items-center min-h-[calc(100vh-306px)] my-12'>
      <section className=' p-2 md:p-6 mx-auto bg-black rounded-md shadow-md w-[350px] lg:w-[500px] p-4'>
        <h2 className='text-lg font-semibold text-white capitalize text-center'>
          Create an assignments
        </h2>

        <form onSubmit={handleFormSubmit}>
          <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
            <div>
              <label className='text-white ' htmlFor='job_title'>
                Assignments Title
              </label>
              <input
                name='title'
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                required
              />
            </div>

            <div>
              <label className='text-white ' htmlFor='emailAddress'>
                Thumbnail URL
              </label>
              <input
                type='text'
                name='url'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                required
              />
            </div>
            <div className='flex flex-col gap-2 '>
              <label className='text-white'>Due Date</label>
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>

            <div className='flex flex-col gap-2 '>
              <label className='text-white ' htmlFor='category'>
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
              <label className='text-white ' htmlFor='min_price'>
                Marks
              </label>
              <input
                name='marks'
                type='number'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                required
              />
            </div>

          </div>
          <div className='flex flex-col gap-2 mt-4'>
            <label className='text-white ' htmlFor='description'>
              Description
            </label>
            <textarea
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              name='description'
              id='description'
              required
            ></textarea>
          </div>
          <div className='flex justify-center mt-6'>
            <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-green-800 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
             Create
            </button>
          </div>
        </form>
      </section>
    </div>
        </div>
    );
};

export default CreateAssignments;