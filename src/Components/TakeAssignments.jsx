import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
// import Marks from "./Marks";


const TakeAssignments = () => {
  const navigate = useNavigate()
    const assignments = useLoaderData()
    const {user} = useContext(AuthContext)
    // const [pdfLink,setPdfLink] = useState("")
    // console.log(assignments)
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
        console.log(err)
    }

    }
    return (
        <div>
             <form onSubmit={handleFormSubmission}>
          <div className=''>
            <div>
              <label className='text-gray-700 ' htmlFor='price'>
              Give your pdf or Doc link
              </label>
              <input
                type='text'
                name='link'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-gray-700 ' htmlFor='emailAddress'>
                Quick note
              </label>
              <input
                id='emailAddress'
                type='text'
                name='note'
                
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            <div className='flex flex-col gap-2 '>
            </div>
          </div>

          <div className='flex justify-end mt-6'>
            <button
              type='submit'
              className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
            >
              Submit
            </button>
          </div>
        </form>
        {/* {pdfLink && <Marks pdfLink={pdfLink}/>} */}
        </div>
    );
};

export default TakeAssignments;