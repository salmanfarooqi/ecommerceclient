import React, { useEffect } from 'react'
import './AboutUs.css'

const AboutUs = () => {

  useEffect(()=>{

    document.title="aboutus"
  })
  return (
    <>
    <div className="header-image">
        <img src='/images/download.jfif'></img>
        <h1 className='aboutus-text'>About Us</h1>
        </div>

        <div className="bottom-section">
            <div className="image">
                <img src='./images/about.jpg'></img>
            </div>

            <div className="text">
                <h1>About us</h1>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolorum, repellendus nam quidem voluptas necessitatibus, magnam, omnis voluptate reiciendis quibusdam atque aspernatur. Eius, excepturi vitae et distinctio dolore alias placeat.
                Beatae recusandae dolor laboriosam accusamus autem officia earum ipsam doloremque vel nihil minima accusantium nemo distinctio tenetur ipsa cupiditate non maxime placeat dolores, voluptates quo esse velit qui cumque? Eligendi.
                Voluptatem reiciendis animi autem, adipisci ab aliquid ipsam doloremque eos velit tempore est eius reprehenderit provident deleniti dolor non! Sequi autem qui ullam eos delectus rerum facilis accusamus, iure quia?
                Provident, iste? Culpa rerum eveniet placeat esse sit ipsam ipsa tempore? Sequi, eaque? Corporis recusandae suscipit reprehenderit eius praesentium blanditiis! Aut magni, quisquam rerum nam alias possimus esse ipsum earum?
                Earum fugiat officiis, vero cupiditate, laborum maxime pariatur aliquam culpa numquam tempora, soluta ea? Pariatur id consequatur autem. Aliquam libero provident exercitationem totam nesciunt delectus voluptatibus, doloribus necessitatibus corporis et.</h2>
            </div>
        </div>
    </>
  )
}

export default AboutUs