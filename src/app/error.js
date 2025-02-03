'use client' // Error components must be Client Components
 
import ArrowBack from '@/components/icons/ArrowBack'
import Image from 'next/image'
import Link from 'next/link'
import { Heading } from '@/components/Heading'

import { useEffect } from 'react'
 
import style from './imgError/error.module.css'
import banner from './imgError/500.png'

export default function Error({
  error,
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className={style.container}>
      <Image src={banner} alt='Robo pensativo para indicar que houve erro no na página'/>
      <Heading>Opa! Ocorreu um erro.</Heading>
      <p className={style.text}>Não conseguimos carregar a página, volte para seguir navegando.</p>
      <Link href="/">
        Voltar ao feed 
      </Link>
    </div>
  )
}
