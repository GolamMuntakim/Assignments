import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";



const TakeAssignments = () => {
  const navigate = useNavigate()
    const assignments = useLoaderData()
    const {user} = useContext(AuthContext)


   


    const {_id,
        description,
        difficulty_level,
        due_date,
        marks,
        thumbnail_image_url,
        title,
        maker
    } = assignments || {}

    const handleFormSubmission = async e=>{
        e.preventDefault()
        if(user?.email === maker?.email) return toast.error('Action not permitted')
        const form = e.target 
        const assignmentId = _id
        const link = form.link.value
        // setPdfLink(link)
        const note = form.note.value
        const email = user?.email
        const name = user?.displayName
        // const maker_email = maker_email
        const status = 'pending'
        const submittedData = {
            assignmentId,
            title,
            link,
            note,
            name,
            marks,
            email,
            status,
            maker_email:maker?.email,
            maker
        }
      console.table(submittedData)
    try{
        const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/submit`, submittedData)
        console.log(data)
        navigate('/mysubmittedassignments')
        toast.success('submitted succesfully')
    }catch(err){
        toast.error(err.response.data)
        e.target.reset()
    }

    }
    return (
        <div >
          <Helmet>
            <title>Take Assignment</title>
          </Helmet>
             <div className="w-[350px] md:w-[400px] mx-auto lg:w-[1260px] flex mt-10 min-h-[calc(100vh-306px)]">
             <form onSubmit={handleFormSubmission} className="mx-auto h-[300px] bg-black p-8 rounded-lg">
          <div className='mx-auto'>
            <div>
              <label className='text-white ' htmlFor='price'>
              Give your pdf or Doc link
              </label>
              <input
                type='text'
                name='link'
                className='block w-72 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                required
              />
            </div>

            <div>
              <label className='text-white ' htmlFor='emailAddress'>
                Quick note
              </label>
              <input
                type='text'
                name='note'
                required
                className='block w-72 px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
          </div>
          <div className='flex justify-center mt-6'>
            <button
              type='submit'
              className='px-8 py-2.5 leading-5  text-white transition-colors duration-300 transform bg-green-800 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
            >
              Submit
            </button>
          </div>
        </form>
             </div>
        </div>
    );
};

export default TakeAssignments;