import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const Marks = () => {
  const navigate = useNavigate()
    const {user} = useContext(AuthContext)
    // const [markss, setmarks] = useState([])
   const markss = useLoaderData()
   console.log(markss)
    const {_id,title,assignmentId,maker_email,maker,marks,name,note,status,link} = markss 
  
    useEffect(()=>{
      // getData() 
  },[markss])
  // const getData= async()=>{
  //     const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/pendingassignments`)
  //     setmarks(data)
  // }
    const handleFormSubmission = async (e,mark)=>{
        e.preventDefault()
        const form = e.target 
        const obtainednumber = parseFloat(form.marks.value)
        const feedback = form.feedback.value
        
        // const email = user?.email
        // const name = user?.displayName
        // const status = 'pending'
        // const mark = markss[0]
        const marksData = {
            obtainednumber:obtainednumber,
            feedback:feedback,
            // link : mark.link,
            // note:mark.note,
            // name,
            // marks:mark.marks,
            // email,
            status:'completed',
            // maker_email:mark.maker?.email,
            // maker:mark.maker,
          
        }
      console.table(marksData)
      
    try{
        const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/mysubmittedassignments/${mark._id}`, marksData)
        console.log(data)
        navigate('/pendingassignments')
        toast.success('marks added')
    }catch(err){
        console.log(err)
    }
    }
    const pendingMarks = markss.filter(mark => mark.status!=='completed')
    return (
        <div>
            {
              pendingMarks.map(mark=>(
                <div key={mark._id}  className='flex justify-center items-center  my-12'>
            
                <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
                <div className="">
                 <h1> <iframe src={mark.link} height="200" ></iframe></h1>
                         {/* <h1 className="font-bold"> submitted Doc/Pdf link :{mark.link} </h1> */}
                        <h1 className="font-bold">  Notes :{mark.note}</h1>
                      </div>
                  <form onSubmit={(e)=>handleFormSubmission(e,mark)}>
                    <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                      <div>
                        <label className='text-gray-700 ' htmlFor='min_price'>
                          Give Assignments Marks
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
                      <label className='text-gray-700 ' htmlFor='description'>
                        Examiner Feedback
                      </label>
                      <textarea
                        className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                        name='feedback'
                        required
                      ></textarea>
                    </div>
                    <div className='flex justify-end mt-6'>
                      <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                       Submit
                      </button>
                    </div>
                  </form>
                </section>
              </div>
                          
              ))
            }
           {/* <div   className='flex justify-center items-center  my-12'>
            
            <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
            <div className="">
                     <h1 className="font-bold"> submitted Doc/Pdf link :{link} </h1>
                    <h1 className="font-bold">  Notes :{note}</h1>
                  </div>
              <form onSubmit={(e)=>handleFormSubmission(e,mark)}>
                <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                  <div>
                    <label className='text-gray-700 ' htmlFor='min_price'>
                      Give Assignments Marks
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
                  <label className='text-gray-700 ' htmlFor='description'>
                    Examiner Feedback
                  </label>
                  <textarea
                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                    name='feedback'
                    required
                  ></textarea>
                </div>
                <div className='flex justify-end mt-6'>
                  <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                   Submit
                  </button>
                </div>
              </form>
            </section>
          </div> */}
            
        </div>
    );
};

export default Marks;