import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {HorizontalAd} from "@/components/HorizontalAd";
import {Navegation} from "@/components/Navegation";

export default function TrabalhistasPage() {
    return (
        <>
            <Header />
            <HorizontalAd />
            <main className="flex flex-col md:flex-row justify-center p-4 md:p-8 gap-6 max-w-[1200px] mx-auto">
                <aside className="w-full md:w-[250px] shrink-0 flex flex-col gap-3.5 p-4">
                    <Navegation name={'trabalhistas'}/>
                </aside>
                <section className=" flex-1 min-h-[400px]  p-4 rounded">
                    <h1>Calculo</h1>
                </section>
                <aside className="w-full md:w-[230px] shrink-0 flex justify-center items-center gap-3.5 p-4">
                    Anuncio Lateral
                </aside>
            </main>
            <Footer />
        </>
    );
}