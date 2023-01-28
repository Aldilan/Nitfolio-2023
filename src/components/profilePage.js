import profilePicture from '../assets/img/profilePicture.jpg'
import githubIcon from '../assets/icons/githubMarkBlack.png'
import linkedinIcon from '../assets/icons/linkedinLogoBlack.png'


function ProfilePage() {
    return(
        <section className="bg-[#1E1E1E] flex flex-col lg:flex-row text-white">
            <div className="flex-col">

                    <img src={profilePicture} className="w-4/5  " alt="profile"/>
                <div className="">
                    <div className="grid grid-cols-3 w-2/5">
                        <div className="flex justify-center items-center bg-[#D9D9D9]"><img src={githubIcon} alt="github" className="w-2/5"/></div>
                        <div className="flex justify-center items-center bg-[#D9D9D9]"><img src={linkedinIcon} alt="github" className="w-2/5"/></div> 
                        <div className="flex justify-center items-center bg-[#D9D9D9]"><img src="https://upload.wikimedia.org/wikipedia/commons/d/de/Windows_live_square.JPG" alt="github" className="w-2/5"/></div>
                    </div>
                    <div className="w-1/2 h-20 bg-[#0089D6] flex justify-center items-center"><span className="text-white font-bold">Download CV Here</span></div>
                </div>
            </div>
            <div className="flex-col">
                <div className="grid justify-between gap-6">
                    <div className="flex">
                        <div className='bg-[#FF592F] px-6 py-4 font-bold'>Contact Me</div>
                    </div>
                    <h1 className="text-3xl font-bold">Aldilan's Portfolio</h1>
                    <span className="leading-none">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam fuga beatae debitis optio deleniti ab, officiis consequuntur maiores fugit sed architecto illo aut dignissimos voluptatibus earum! Totam ullam voluptatibus sunt!</span>
                    <div className="flex justify-end">
                        <div className='bg-white border-r-4 border-blue-500 text-[#1E1E1E] px-8 py-4 font-semibold'>Front End Developer</div>
                    </div>
                </div>
                <div></div>
            </div>
        </section>
    )   
}

export default ProfilePage