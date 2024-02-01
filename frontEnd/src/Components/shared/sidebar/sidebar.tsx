import './sidebar.css';
import logo from './../../../assets/Frame 1.svg'
import icon from './../../../assets/Icon/Home-simple-door.svg'
import React, { useCallback, useEffect, useState } from 'react';
import ProfileIcon from './icons/Profile';
import HomeIcon from './icons/Home';
import AnalyticsIcon from './icons/Analytics';
import ChatIcon from './icons/Chat';
import SettingsIcon from './icons/Settings';
import LogoutIcon from './icons/Logout';


function SidebarComponent(): JSX.Element {
  
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const handleIconClick = (index: number) => {
    setActiveIndex(index);
  };

  const icons = [
    { icon: <HomeIcon activeIndex={activeIndex} />, label: 'Home' },
    { icon: <ProfileIcon activeIndex={activeIndex} />, label: 'Profile' },
    { icon: <AnalyticsIcon activeIndex={activeIndex} />, label: 'Analytics' },
    { icon: <ChatIcon activeIndex={activeIndex} />, label: 'Chat' },
    { icon: <SettingsIcon activeIndex={activeIndex} />, label: 'Settings' }
    // Add more icons as needed
  ];

  return (
    <>
      <div className="Side ml-8 mt-16 w-20 h-3/4 rounded-[25px] border-2 relative">
        <div className="h-full bg-[#2C2729] rounded-3xl top-0 left-0 right-0 bottom-0 flex flex-wrap justify-center items-center">
          <div className="w-auto h-auto">
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
            {/* <div className="w-full h-[1px] bg-zinc-600 bg-opacity-80" /> */}
            <div className="p-2  rounded-lg justify-center items-center gap-2 flex">
            {/* <div className="px-3 py-4 rounded-lg justify-start items-center gap-3 flex cursor-pointer"> */}
                <LogoutIcon activeIndex={false} />
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
export default SidebarComponent;
