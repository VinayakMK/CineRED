import React from 'react'
import { Link } from '@mui/material';
import Divider from '@mui/material-next/Divider';

function About() {
  return (
    <div className="description-about-container mt-5">
        <h2 style={{color:'red'}}>About CineRED</h2>
        <Divider color="#FDA228" sx={{ height: 2, width: '230px', borderBottomWidth: '4px' }} />

        <p className='mt-4'>At CineRED, we're passionate about the world of cinema. We're more than just a website; we're a community of movie enthusiasts,
        film buffs, and entertainment aficionados. Our mission is to provide you with a one-stop destination for everything related to the 
        silver screen.</p>

        <h2 className='mt-5' style={{color:'red'}}>Our Story</h2>
        <Divider color="#FDA228" sx={{ height: 2, width: '150px', borderBottomWidth: '4px' }} />

        <p className='mt-4'>Founded in October 2023, CineRED was born out of a love for movies and a desire to create a space where fellow
        movie lovers can come together to celebrate the art of filmmaking. Our core mission has remained the same - to share our passion for 
        cinema with you.</p>

        <h2 className='mt-5'style={{color:'red'}}>What We Offer</h2>
        <Divider color="#FDA228" sx={{ height: 2, width: '230px', borderBottomWidth: '4px' }} />

        <ul className='mt-4'>
            <li className='mt-4'>Movie Reviews: Our dedicated team of film critics and writers provides in-depth, honest, and unbiased 
                                movie reviews. Whether it's the latest blockbuster or an indie gem, we've got you covered.</li>
            <li className='mt-4'>Top Lists: Explore our carefully curated lists of must-watch movies, from classic films to contemporary
                                 masterpieces.</li>
            <li className='mt-4'>Movies of different genres : Unlike some applications, this application will actually provide 
                                different movie genres for the user to pick and stream.</li>
            <li className='mt-4'> Simple and User-friendly design : The web application provides a simple and user-friendly platform 
                                to view and stream the movie easly</li>
            <li className='mt-4'>User registration and Authentication : For privacy and security reasons, this website offers user 
                                registration and login features. Users can create accounts and log in safely.</li>
            <li className='mt-4'>Community: Join our community of movie enthusiasts. Discuss your favorite films, share 
                                recommendations, and connect with fellow cinephiles.</li>
        </ul>

        <h2 className='mt-5' style={{color:'red'}}>Why Choose CineRED?</h2>
        <Divider color="#FDA228" sx={{ height: 2, width: '350px', borderBottomWidth: '4px' }} />

        <ul className='mt-4'>
            <li className='mt-4'>Passion: We are driven by our love for movies, and our content reflects our enthusiasm for the 
                                art of storytelling through film.</li>
            <li className='mt-4'>Quality: We prioritize quality content, ensuring that our reviews, articles, and features are
                                 informative, engaging, and well-researched.</li>
            <li className='mt-4'>Diversity: Our website covers a wide range of genres, eras, and film cultures, ensuring there's
                                 something for every movie lover.</li> 
            <li className='mt-4'>Interactivity: We value your input and encourage you to join the conversation. Share your 
                                thoughts, comments, and reviews with our community.</li>                     
        </ul>

        <p className='mt-4'>Thank you for visiting CineRED. We hope you enjoy your time here and that we 
        can contribute to your love of cinema. Whether you're a casual moviegoer or a die-hard cinephile, we invite you to 
        explore our site, engage with our content, and become a part of our movie-loving family.</p>

        <p className='mt-4'>Lights, camera, action! Let's embark on this cinematic journey together.</p>

        <p className='mt-4'>For any inquiries, suggestions, or collaboration opportunities, please don't hesitate to <Link rel="stylesheet" style={{color:'red', textDecoration:'none'}} href="/contact">contact us!</Link></p>

    </div>
  )
}

export default About