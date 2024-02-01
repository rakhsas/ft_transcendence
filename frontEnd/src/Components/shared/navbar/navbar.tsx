import "./navbar.css"
function NavbarComponent(): JSX.Element {
    return (
        <>
            <div className="Side ml-48 mt-8 w-72 h-12 rounded-[20px] border-2 relative">
                <div className="h-full bg-[#2C2729] rounded-xl top-0 left-0 right-0 bottom-0 flex flex-wrap justify-center items-center">
                {/* <div className="flex items-center justify-center w-screen h-screen bg-gray-800"> */}
                    <div className="bg-transparent flex flex-row items-center">
                        <input type="search" name="q" className="mr-9 placeholder:text-white border-transparent focus:ring-transparent focus:border-transparent bg-transparent text-white py-2 text-sm rounded-md" placeholder="Search..." autoComplete="off"></input>
                        <span className="relative inset-y-0 left-0  pl-2 bg-transparent">
                            <button type="submit" className="p-1">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </button>
                        </span>
                    </div>
                {/* <form method="GET">
                </form> */}
            {/* </div> */}
                    {/* <div className="w-auto h-auto">
                        <div className="w-auto h-[45px] relative flex flex-col justify-center items-center">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <div className="w-auto py-10">
                        {icons.map((icon, index) => (
                            <div
                                key={index}
                                className={`px-3 py-4 rounded-lg justify-start items-center gap-3 flex cursor-pointer ${activeIndex === index ? 'bg-[#2C2729]' : ''
                                    }`}
                                onClick={() => handleIconClick(index)}
                            >
                                {icon.icon}
                            </div>
                        ))}
                    </div>
                    <div className="w-full flex flex-col justify-end items-center">
                        <div className="p-2  rounded-lg justify-center items-center gap-2 flex">
                            <LogoutIcon activeIndex={false} />
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default NavbarComponent;