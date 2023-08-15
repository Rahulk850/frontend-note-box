import React ,{Component}from 'react'
import { Card } from './Card'
import {BiLockAlt,BiMobile} from 'react-icons/bi'
import {LuAlarmClock,LuCalendarSearch} from 'react-icons/lu'
import {GiNotebook} from 'react-icons/gi'
import {MdSecurity} from 'react-icons/md'
import './Services.css'

export const Services = () => {
    const data  = [
        {
            title:"100% Private",
            icon:<BiLockAlt/>,
            description:"Designed to focus on privacy, your entries are totally private by default!"
        },
        {
            title:"Available Everywhere",
            icon:<BiMobile/>,
            description:"Enjoy Penzu on the move. Available for iOS and Android and totally free!"
        },
        {
            title:"Never Forget to Write",
            icon:<LuAlarmClock/>,
            description:"Custom email reminders help you make sure you never forget to write."
        },
        {
            title:"Fully Customizable Diary",
            icon:<GiNotebook/>,
            description:"Make each journal your own with custom covers, backgrounds, and fonts."
        },
        {
            title:"Smart Journal Search",
            icon:<LuCalendarSearch/>,
            description:"Quickly and easily search through your journals, entries, and tags."
        },
        {
            title:"Military Grade Security",
            icon:<MdSecurity/>,
            description:"Further protect your diary with military-grade 256-bit AES encryption."
        }
    ]
  return (
    <div className='services-container' id='services'>
    {data.map((service,index)=>(
      <Card service={service} key={index} />
    ))
    }
      </div>
  )
}
