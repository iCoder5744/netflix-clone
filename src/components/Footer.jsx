import React from 'react'
import youtube_icon from '../assets/youtube_icon.png'
import twitter_icon from '../assets/twitter_icon.png'
import instagram_icon from '../assets/instagram_icon.png'
import facebook_icon from '../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className="px-4 py-8 max-w-[1000px] mx-auto">
      <div className="flex gap-5 my-10">
        <img src={facebook_icon} alt="Facebook" className="w-8 cursor-pointer" />
        <img src={instagram_icon} alt="Instagram" className="w-8 cursor-pointer" />
        <img src={twitter_icon} alt="Twitter" className="w-8 cursor-pointer" />
        <img src={youtube_icon} alt="YouTube" className="w-8 cursor-pointer" />
      </div>
      <div className="flex flex-wrap justify-between gap-4">
        <ul className="text-gray-500">
          <li className="py-1">Audio Description</li>
          <li className="py-1">Help Center</li>
          <li className="py-1">Gift Cards</li>
          <li className="py-1">Media Center</li>          
        </ul>
        <ul className="text-gray-500">
          <li className="py-1">Jobs</li>
          <li className="py-1">Terms of Use</li>
          <li className="py-1">Privacy</li>
          <li className="py-1">Legal Notices</li>
        </ul>
        <ul className="text-gray-500">
          <li className="py-1">Cookie Preferences</li>
          <li className="py-1">Corporate Information</li>
          <li className="py-1">Investor Relations</li>
          <li className="py-1">Contact Us</li>
        </ul>
      </div>
      <p className="mt-8 text-center text-gray-400 text-sm">Copyright By Shivam Yadav</p>
    </div>
  )
}

export default Footer
