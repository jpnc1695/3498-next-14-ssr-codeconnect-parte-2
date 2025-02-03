import { Heading } from "@/components/Heading";
import Image from "next/image";
import Link from "next/link";

import style from './imgError/error.module.css'
import banner from './imgError/404.png'

export default async function NotFound() {
  return (
    <div className={style.container}>
      <Image src={banner} alt="Imagem de um robô triste para indicar que o texto não foi encontrado."/>
      <Heading>Opa! Ocorreu um erro.</Heading>
      <p className={style.text}>Não conseguimos carregar a página, volte para seguir navegando.</p>
      <Link href="/">
        Voltar ao feed 
      </Link>
    </div>
  )
}