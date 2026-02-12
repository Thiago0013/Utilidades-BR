import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {HeartPlus, Calculator, MapPinned} from 'lucide-react';
import {Cards} from "@/components/Cards";
import {HorizontalAd} from "@/components/HorizontalAd";
import {Navegation} from "@/components/Navegation";

export default function Home() {
  return (
    <>
      <Header/>
        <HorizontalAd/>
        <main className="flex flex-col md:flex-row justify-center p-4 md:p-8 gap-6 max-w-[1200px] mx-auto">

            <aside className="w-full md:w-[250px] shrink-0 flex flex-col gap-3.5 p-4">
                <Navegation name={'trabalhistas'}/>
            </aside>
            <section className=" flex-1 min-h-[400px] text-white p-4 rounded">
                <div>
                    <h1 className={'text-4xl text-gray-900'}>Ferramentas gratuitas para seu dia a dia</h1>
                    <p className={'text-gray-900 mt-3'}>Calculos e consultas rápidas sem enrolação.</p>
                </div>
                <div className={'flex gap-5 mt-8'}>
                    <Cards icon={MapPinned} title={"teste"} description={"descrição"}/>
                    <Cards icon={Calculator} title={"Calculadora trabalhista"} description={"Calcule sua taxa de recebimento após demissão."}/>
                    <Cards icon={HeartPlus} title={"Calculadora de IMC"} description={"Calcule seu imc para ver se você está dentro da saúde segura"}/>
                </div>
            </section>

            <aside className="w-full md:w-[230px] shrink-0 flex justify-center items-center gap-3.5 p-4">
                Anuncio Lateral
            </aside>
        </main>
        <Footer/>
    </>
  );
}
