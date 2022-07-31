import React from 'react'
import './Home.css'
import Header from '../components/header/Header'
import Posts from '../components/posts/posts'
import SideBar from '../components/sidebar/SideBar'

export default function Home() {
  return (
    <div>
        <Header/>
        <div className="home">
        <Posts/>
        <SideBar/>
        </div>
    </div>
  )
}
