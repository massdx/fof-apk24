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
import { useEffect } from 'react'
import AOS from "aos"
import 'aos/dist/aos.css';

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
    <Navbar />
    <Header />
    <Parteners />
    <About />
    <Why />
    <Speakers />
    <Program />
    <RegisterCta />
    <Sponsors />
    <Footer />
  </>


}
