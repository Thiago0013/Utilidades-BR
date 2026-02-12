import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {MapPinned} from 'lucide-react';

import Link from "next/link";
import {Cards} from "@/components/Cards";

export default function Home() {
  return (
    <>
      <Header/>
        <div className={'bg-amber-300 w-240 m-auto text-center h-30 mt-8 flex justify-center items-center'}>
            Anuncio
        </div>
        <main className="flex flex-col md:flex-row justify-center p-4 md:p-8 gap-6 max-w-[1200px] mx-auto">

            <aside className="flex flex-col gap-3.5 w-full md:w-48 min-h-[200px] p-4 rounded">
                <div>
                    <h1 className={'font-bold'}>Nagevação rápida:</h1>
                </div>
                <nav className={'flex flex-col gap-2.5 text-base'}>
                    <Link className={'w-22 text-gray-600 hover:text-blue-600'} href={'/trabalhistas'}>Trabalhistas</Link>
                    <Link className={'w-15 text-gray-600 hover:text-blue-600'} href={'/saude'}>Saúde</Link>
                    <Link className={'w-18 text-gray-600 hover:text-blue-600'} href={'/consultas'}>Consultas</Link>
                </nav>
            </aside>
            <section className="flex-1 min-h-[400px] text-white p-4 rounded">
                <div>
                    <h1 className={'text-4xl text-gray-900'}>Ferramentas gratuitas para seu dia a dia</h1>
                    <p className={'text-gray-900 mt-3'}>Calculos e consultas rápidas sem enrolação.</p>
                </div>
                <div className={'flex gap-4 mt-8'}>
                    <Cards icon={MapPinned} title={"teste"} description={"descrição"}/>
                    <Cards icon={MapPinned} title={"teste"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, odio."}/>
                    <Cards icon={MapPinned} title={"teste"} description={"descrição"}/>
                </div>
            </section>

            <aside className="w-full md:w-64 bg-amber-200 min-h-[200px] flex justify-center items-center rounded">
                Anuncio Lateral
            </aside>
        </main>
        <Footer/>
    </>
  );
}
