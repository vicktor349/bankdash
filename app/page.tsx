"use client"
import React, { useState } from 'react'
import Dashboard from './components/Dashboard';
import { useRouter } from 'next/compat/router';
import SideNavbar from './components/SideNavbar';



export default function Home() {
  const router = useRouter()
  const [activeComponent, setActiveComponent] = useState<string>("Dashboard")


  const handleSetActiveComponent: (component: string) => void = (component) => {
    setActiveComponent(component);
    router?.push(
      {
        pathname: '/dashboard',
        query: { component },
      },
      undefined,
      { shallow: true }
    );
  };


  const renderComponent = () => {
    switch (activeComponent) {
      case "Dashboard":
        return <Dashboard handleSetActiveComponent={handleSetActiveComponent} />;
      default:
        return <Dashboard handleSetActiveComponent={handleSetActiveComponent} />;
    }
  };

  return (
    <div className='lg:flex'>
      <div className='absolute left-0'>
        <div className='lg:w-56 xl:w-64 2xl:w-72 lg:flex fixed ssm:hidden h-screen'>
          <SideNavbar activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
        </div>
      </div>
      <div className='flex-1 lg:ml-44 xl:ml-52 2xl:ml-72 w-full'>
        <div className='left-80'>
          {renderComponent()}
        </div>
      </div>
    </div>
  );
}
