import adebisi1 from "../img/adebisi1.jpg"
import adebisi2 from "../img/adebisi2.jpg"
import codes from "../img/codes.avif"
import contact2 from "../img/contact2.png"
// import contact1 from "../img/contact1.png"


function Home () {
    

                    // Introduction
    return(
        <>
            <nav className="flex justify-between bg-green-400 px-[4rem] py-[1rem] fixed w-full ">
                    <button className="font-bold text-[1.5rem] text-[#ffffff] rounded px-[4rem] hover:text-[#f9cd9e]"><a href="/Home">Home // Web & Mobile Software Engineer</a></button>
                <div className="flex justify-between  w-[18rem] font-semibold">
                    <button className="border rounded hover:-translate-y-1 duration-700 p-1 text-[#ffffff] hover:bg-[#f9cd9e]"><a href="#aboutme">About Me</a></button>
                    <button className="border rounded hover:-translate-y-1 duration-700 p-1 text-[#ffffff] hover:bg-[#f9cd9e]"><a href="#Contactme">Contact Me</a></button>
                    <button className="border rounded hover:-translate-y-1 duration-700 p-1 text-[#ffffff] hover:bg-[#f9cd9e]"><a href="#Myskills">My Skills</a></button>
                </div>
            </nav>
            <body className="px-[2rem] py-[4rem] ">
                <div className="flex justify-between">
                    <div className="p-[4rem]">
                        <div className="border rounded-lg">
                        {<img
                                alt="adebisi"
                                class="block h-[30rem] w-[30rem] rounded-lg object-cover object-center"
                                src={adebisi1} />}
                        </div>
                    </div>
                    <div className="">
                            <div className="p-[4rem]">
                                <div className="border rounded-lg h-[30rem] w-[50rem] p-[10rem]">
                                    <h1 className="text-green-400 text-[3rem] font-bold">My name is Toyyib</h1>
                                    <p className="font-bold">but you can call me "ADEBISI",i'm a frontend web developer based in Bariga,Lagos.
                                     have developed many types of frontend using React,Tailwind,Boostrap. <br />
                                     I'm passionate about cutting-edges,pixel-perfect, beautifull interfaces and intuitive implemented UX. </p>
                                     <button className=" border border-gray-500 rounded hover:-translate-y-1 duration-700 p-2 text-[#ffffff] bg-green-400 hover:bg-[#f9cd9e] w-[10rem]"><a href="#aboutme">Learn more</a></button>
                                     <button className=" border border-gray-500 rounded hover:-translate-y-1 duration-700 p-2 text-[#ffffff] bg-green-400 hover:bg-[#f9cd9e] mx-3 w-[10rem]"><a href="#Contactme">Contact Me</a></button>
                            </div>
                    </div>
                    
                </div>
                </div>

                            {/* Aboutme */}

                <div id="aboutme" className="px-[2rem] py-[4rem] ">
                    <div className="flex justify-between">
                        <div className="p-[4rem]">
                            <div className="border rounded-lg">
                                {<img
                                        alt="adebisi"
                                        class="block h-[30rem] w-[30rem] rounded-lg object-cover object-center"
                                        src={adebisi2} />}
                         </div>
                    </div>
                    <div className="">
                            <div className="p-[4rem]">
                                <div className="border rounded-lg h-[30rem] w-[50rem] p-[10rem] bg-[#FED1A5]">
                                    <h1 className="text-[#ffffff] text-[2rem] font-bold">About Me</h1>
                                    <p className="font-bold">I trained and work as web & mobile frontend engineer at 
                                    <a a className="text-[#ffffff]" href="https://www.zulfahgroup.com"><button>Zulfah academy</button></a> <br />
                                    have developed many types of web & mobile frontends using React Js,React Native,Taiwind,Boostrap, <br /> 
                                    you can check my <a a className="text-[#ffffff]" href="https://github.com/Tooyyib"><button>Github</button></a> for my work details </p>
                            </div>
                    </div>
                    
                </div>
                </div>
            </div>

                            {/* My Skills */}

            <div id="Myskills" className="px-[2rem] py-[4rem] ">
                <div className="flex justify-between">
                    <div className="p-[4rem]">
                        <div className="border rounded-lg">
                        {<img
                                alt="adebisi"
                                class="block h-[30rem] w-[30rem] rounded-lg object-cover object-center"
                                src={codes} />}
                        </div>
                    </div>
                    <div className="">
                            <div className="p-[4rem]">
                                <div className="border rounded-lg h-[30rem] w-[50rem] p-[10rem] bg-[#4ade80]">
                                    <h1 className="text-[#ffffff] text-[2rem] font-bold">Experience</h1>
                                    <p className="font-bold">HTML <br /> CSS <br />Javascript <br /> BOOSTRAP <br /> TAILWIND <br /> REACT JS <br /> REACT NATIVE </p>
                            </div>
                    </div>
                    
                </div>
                </div>
            </div>

                            {/* contactMe */}

            <div id="Contactme" className="px-[2rem] py-[4rem] ">
                <div className="flex justify-between">
                    <div className="p-[4rem]">
                        <div className="border rounded-lg">
                        {<img
                                alt="adebisi"
                                class="block h-[30rem] w-[30rem] rounded-lg object-cover object-center"
                                src={contact2} />}
                        </div>
                    </div>
                    <div className="">
                            <div className="p-[4rem]">
                                <div className="border rounded-lg h-[30rem] w-[50rem] p-[10rem] bg-[#78bece]">
                                    <h1 className="text-[#fffff] text-[2rem] font-bold">Contact Me</h1>
                                    <p className="font-bold">You can connect with me via <br />
                                   phone: 09091478239 <br />
                                   whatsapp: <a className="text-[#ffffff]" href="https://wa.me/+2349091478239"><button>09091478239</button></a><br />
                                   facebook: <a className="text-[#ffffff]" href="https://www.facebook.com/adebisi.tooyyib"><button>Adebisi tooyyib </button></a><br />
                                   linkedin: <a a className="text-[#ffffff]" href="https:www.linkedin.com/tooyyib"><button>Adebisi tooyyib </button></a><br />
                                   telegram: <a a className="text-[#ffffff]" href="https://t.me/+2349091478239"><button>09091478239</button></a><br />
                                   Email: <a a className="text-[#ffffff]" href="https://www.gmail.adebisitooyyib@gmail.com"><button>adebisitooyyib@gmail.com</button></a>

                                    </p>
                            </div>
                    </div>
                        
                    </div>
                    </div>
                </div>
            </body>
        </>

    )
    
}
export default Home