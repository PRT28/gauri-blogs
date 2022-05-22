import React from 'react';
import './About.scss';
import Profile from '../About/profile.jpeg';

const About = () => {
    return (
        <div className="about">
            <h3>About</h3>
            <hr />
            <img src={Profile} alt="profile" />

            <p>Hello All!

Thanks for taking out time and visiting my website. I am Gauri Harbola, the charming and witty voice behind this blog page. I am a visualiser who loves thinking and coming up with new ideas. I am a digital marketer who is passionate about helping people become more comfortable and confident in their life. I am based out of Haldwani (Nainital) and have started this blog page to get a hold of creative fluids. 

So here’s the thing: they didn’t teach us how to travel, how to dress up or how to live life in general in school. And yet we get into the real world and we’re sort of just supposed to know about it. And then when we struggle, we feel shame and beat ourselves to it.  So I am here to help you learn how to do some of the basic things in life in style and live your life to the fullest.

This page is a blog that serves as a modern-day advice column for millennials who are undergoing major life changes, graduating, moving into new places, settling down with a partner, and learning how to adult. So if you’re looking for content on travel, fashion, lifestyle etc you’re in the perfectly right spot. Having worked for various digital marketing agencies, I have now gained knowledge of what people are looking for on web pages like these. Hence I can assure you that the content that you get here is going to be A-class and helpful. 

But that’s not all! I am not here just to post content and let the world hear my voice. I am here to help you let the world hear your voice too. This page serves as a multipurpose blog posting website wherein you can post blogs for your website under the different domains listed above. Anyone who wants to guest post on our website is welcome to do so within the varied domains that we have curated keeping in mind your special needs.
</p>
        </div>
    );
};

export default About;
