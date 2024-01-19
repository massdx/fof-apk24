"use client"
import Image from 'next/image'
import Header from './_block/header'
import Navbar from '@/components/nav-bar'
import { Parteners, Sponsors } from './_block/parteners-sponsor'
import About from './_block/about'
import Why from './_block/why'
import Speakers from './_block/speakers'
import Program from './_block/program'
import RegisterCta from './_block/register-cta'
import Footer from '@/components/footer'
import AOS from "aos"
import 'aos/dist/aos.css';
import { LocalisationCta } from './_block/localisation-cta'
import Faq from './_block/faq'
import { Flying } from '@/components/flying'
import { useEffect } from 'react'


export default function Home() {

  useEffect(() => {
   
      AOS.init({
        once: true,
        anchorPlacement: 'top-bottom',
      });
    window.addEventListener('load', AOS.refresh);
    return () => {
      window.removeEventListener('load', AOS.refresh);
    }
  }, [])


  return <>
 
    <Flying />
    <Navbar />
    <Header />
    <About />
    <Why />
    <Speakers />
    <Program />
    <RegisterCta />
    <LocalisationCta />
    <Sponsors />
    <Faq />
    <Footer />
  </>


}

