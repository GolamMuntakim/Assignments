import { CiLocationArrow1 } from "react-icons/ci";
import { IoMdPlayCircle } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="w-[400px] md:w-[450px] lg:w-[1260px] mx-auto">
            <div className="flex flex-col lg:flex-row pb-4 items-center justify-center text-white bg-black">
                <div className="space-y-4">
                    <h1 className="flex items-center text-3xl font-bold">Let's <img src="/images/Mask.png" alt="" srcset="" />Learn New</h1>
                    <h1 className="text-3xl font-bold">Course And Gain</h1>
                    <h1 className="flex font-bold text-3xl "><img src="/images/Star.png" alt="" />More Skills !</h1>
                    <p>Knowledge is power - start your journey with our online courses. Learn our <br /> online courses!</p>
                    <div className="flex gap-4">
                    <button className="btn btn-success text-white rounded-full">Enroll Now <CiLocationArrow1 /></button>
                    <button className="btn btn-outline rounded-full">Our Story<IoMdPlayCircle/></button>
                    </div>
                </div>
                <div><img className="hidden lg:flex h-[400px]" src="/banner.png" alt="" /></div>
            </div>
            <div className="flex justify-between mt-8 w-[350px] lg:w-[1260px] mx-auto ">
                <h1 className="text-xl lg:text-3xl font-bold">Our <span className="text-green-500">Top Courses</span></h1>
                <button className="btn btn-info rounded-full bg-[#F0F0F0] border-none">View All <FaArrowRight />
</button>
            </div>
            {/* features */}
            <div className="lg:w-[1260px] md:w-[400px] w-[350px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 w-[350px] lg:w-[1000px] mx-auto gap-4 ">
                <div className="shadow-xl p-8 transition duration-300 ease-in-out hover:scale-110">
                <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                    <div className="avatar"><div className="w-10 rounded-full"><img src="/images/1.png" /></div>
                    </div>
                    <div><h1 className="font-bold">Arifin Shuvo</h1></div>
                    </div>
                    <div className="flex items-center"><img src="/images/favorite.png" alt=""  />4.8</div>
                </div>
                <p className="mt-4">Complete Web Design: from Figma to Webflow to Freelancing course 2023</p>
                <div className="divider divider-start"></div>
                <p className="flex justify-between font-bold">Enroll Now<FaArrowRight />
</p>
                </div>
                <div className="shadow-xl p-8 transition duration-300 ease-in-out hover:scale-110">
                <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                    <div className="avatar"><div className="w-10 rounded-full"><img src="/images/2.png" /></div>
                    </div>
                    <div><h1 className="font-bold">Dianne Russell</h1></div>
                    </div>
                    <div className="flex items-center"><img src="/images/favorite.png" alt=""  />4.8</div>
                </div>
                <p className="mt-4">Complete Web Design: from Figma to Webflow to Freelancing course 2023</p>
                <div className="divider divider-start"></div>
                <p className="flex justify-between font-bold">Enroll Now<FaArrowRight />
</p>
                </div>
                <div className="shadow-xl p-8 transition duration-300 ease-in-out hover:scale-110">
                <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                    <div className="avatar"><div className="w-10 rounded-full"><img src="/images/3.png" /></div>
                    </div>
                    <div><h1 className="font-bold">Jerome Bell</h1></div>
                    </div>
                    <div className="flex items-center"><img src="/images/favorite.png" alt=""  />4.8</div>
                </div>
                <p className="mt-4">Complete Web Design: from Figma to Webflow to Freelancing course 2023</p>
                <div className="divider divider-start"></div>
                <p className="flex justify-between font-bold">Enroll Now<FaArrowRight />
</p>
                </div>
                <div className="shadow-xl p-8 transition duration-300 ease-in-out hover:scale-110">
                <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                    <div className="avatar"><div className="w-10 rounded-full"><img src="images/4.png" /></div>
                    </div>
                    <div><h1 className="font-bold">Jenny Wilson</h1></div>
                    </div>
                    <div className="flex items-center"><img src="/images/favorite.png" alt=""  />4.8</div>
                </div>
                <p className="mt-4">Complete Web Design: from Figma to Webflow to Freelancing course 2023</p>
                <div className="divider divider-start"></div>
                <p className="flex justify-between font-bold">Enroll Now<FaArrowRight />
</p>
                </div>
                <div className="shadow-xl p-8 transition duration-300 ease-in-out hover:scale-110">
                <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                    <div className="avatar"><div className="w-10 rounded-full"><img src="/images/5.png" /></div>
                    </div>
                    <div><h1 className="font-bold">Robert Fox</h1></div>
                    </div>
                    <div className="flex items-center"><img src="/images/favorite.png" alt=""  />4.8</div>
                </div>
                <p className="mt-4">Complete Web Design: from Figma to Webflow to Freelancing course 2023</p>
                <div className="divider divider-start"></div>
                <p className="flex justify-between font-bold">Enroll Now<FaArrowRight />
</p>
                </div>
                <div className="shadow-xl p-8 transition duration-300 ease-in-out hover:scale-110">
                <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                    <div className="avatar"><div className="w-10 rounded-full"><img src="/images/6.png" /></div>
                    </div>
                    <div><h1 className="font-bold">Kathryn Murphy</h1></div>
                    </div>
                    <div className="flex items-center"><img src="/images/favorite.png" alt=""  />4.8</div>
                </div>
                <p className="mt-4">Complete Web Design: from Figma to Webflow to Freelancing course 2023</p>
                <div className="divider divider-start"></div>
                <p className="flex justify-between font-bold">Enroll Now<FaArrowRight />
</p>
                </div>
            </div>
            </div>
            <div className="mt-8 w-[350px] md:w-[400px] lg:w-[1260px] mx-auto text-center rounded-full">
            <button className="btn rounded-full">Features</button>
            </div>
            <div className="text-center w-[350px] md:w-[400px] lgw-[1260px]">
                <p className="text-3xl font-bold">Why We <span className="text-green-500">Are Better Than</span> Others</p>
                <p>Empowering you to reach your goals through online education!</p>
            </div>
           <div className="mt-10">
           <div className="grid grid-cols-1 lg:grid-cols-3 w-[350px] md:w-[400px] lg:w-[1260px] p-8 gap-4">
                <div className="flex flex-col items-center bg-[#E1E2E3] p-8 backdrop-blur-md  rounded-xl transition duration-300 ease-in-out hover:scale-110">
                    <img src="/images/verify.png" alt="" />
                    <h1 className="mt-4">Certified Platform</h1>
                    <p>We Empowering you to reach your goals <br /> through online education!</p>
                    <p className="flex gap-2 items-center">Know More <FaArrowRight /></p>
                </div>
                <div className="flex flex-col items-center bg-[#E1E2E3] p-8  rounded-xl transition duration-300 ease-in-out hover:scale-110">
                    <img src="/images/like.png" alt="" />
                    <h1 className="mt-4">World-class Content</h1>
                    <p>We Empowering you to reach your goals <br /> through online education!</p>
                    <p className="flex gap-2 items-center">Know More <FaArrowRight /></p>
                </div>
                <div className="flex flex-col items-center bg-[#E1E2E3] p-8  rounded-xl transition duration-300 ease-in-out hover:scale-110">
                    <img src="/images/customer.png" alt="" />
                    <h1 className="mt-4">Online Support</h1>
                    <p>We Empowering you to reach your goals <br /> through online education!</p>
                    <p className="flex gap-2 items-center">Know More <FaArrowRight /></p>
                </div>
            </div>
           </div>
           {/* faq */}
           <div>
           <section className=" text-black w-[350px] md:w-[400px]  lg:w-[1260px]">
	<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
		<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
		<div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">What kind Of service will you get?</summary>
				<div className="px-4 pb-4">
					<p>You will get all kind of service related to the education</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">How years old should i need to join the courses?</summary>
				<div className="px-4 pb-4">
					<p>Our courses is for the 8-18 years old students?</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">How much time the courses will be accesbale?</summary>
				<div className="px-4 pb-4 space-y-2">
					<p>You will get life time access in the course.</p>
				</div>
			</details>
		</div>
	</div>
</section>
           </div>
        </div>
    );
};

export default Banner;