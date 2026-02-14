"use client";

import {Header} from "@/components/Header";
import {HorizontalAd} from "@/components/HorizontalAd";
import {Navegation} from "@/components/Navegation";
import {Footer} from "@/components/Footer";
import {Calculator} from "@/components/Calculator";

export default function SaudePage(){

    return (
        <>
            <Header />
            <HorizontalAd />
            <main className="flex flex-col md:flex-row justify-center p-4 md:p-8 gap-6 max-w-[1200px] mx-auto">
                <aside className="w-full md:w-[250px] shrink-0 flex flex-col gap-3.5 p-4">
                    <Navegation name={'saude'}/>
                </aside>

                <aside className={'flex-1 min-h-[400px] p-4 rounded flex flex-col gap-4'}>
                    <Calculator />
                    <div className={'flex justify-center items-center p-2'}>
                        <table className={'w-full'}>
                            <thead>
                                <tr>
                                    <th className={'text-start'}>IMC</th>
                                    <th className={'text-start'}>Classificação</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="flex items-center gap-2
                                                before:content-['']
                                                before:block
                                                before:w-3
                                                before:h-3
                                                before:rounded-full
                                                before:bg-blue-800
                                                p-2 text-blue-800 text-1.2l
                                                ">Abaixo de 18,5</td>
                                    <td className="p-2 font-bold text-blue-500">Peso baixo</td>
                                </tr>
                                <tr>
                                    <td className="flex items-center gap-2
                                                before:content-['']
                                                before:block
                                                before:w-3
                                                before:h-3
                                                before:rounded-full
                                                before:bg-green-500
                                                p-2 text-blue-800 text-1.2l
                                                ">18,5 a 24,9 </td>
                                    <td className="p-2 font-bold text-blue-500">Peso normal</td>
                                </tr>
                                <tr>
                                    <td className="flex items-center gap-2
                                                before:content-['']
                                                before:block
                                                before:w-3
                                                before:h-3
                                                before:rounded-full
                                                before:bg-yellow-400
                                                p-2 text-blue-800 text-1.2l
                                                ">25 a 29,9</td>
                                    <td className="p-2 font-bold text-blue-500">Sobrepeso</td>
                                </tr>
                                <tr>
                                    <td className="flex items-center gap-2
                                        before:content-['']
                                        before:block
                                        before:w-3
                                        before:h-3
                                        before:rounded-full
                                        before:bg-orange-400
                                        p-2 text-blue-800 text-1.2l
                                        ">30 a 34,9</td>
                                    <td className="p-2 font-bold text-blue-500">Obesidade I</td>
                                </tr>
                                <tr>
                                    <td className="flex items-center gap-2
                                        before:content-['']
                                        before:block
                                        before:w-3
                                        before:h-3
                                        before:rounded-full
                                        before:bg-red-500
                                        p-2 text-blue-800 text-1.2l
                                        ">35 a 39,9 </td>
                                    <td className="p-2 font-bold text-blue-500">Obesidade II</td>
                                </tr>
                                <tr>
                                    <td className="flex items-center gap-2
                                                before:content-['']
                                                before:block
                                                before:w-3
                                                before:h-3
                                                before:rounded-full
                                                before:bg-amber-900
                                                p-2 text-blue-800 text-1.2l
                                                ">
                                        Acima de 40</td>
                                    <td className="p-2 font-bold text-blue-500">Obesidade III</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </aside>

                <aside className="w-full md:w-[230px] shrink-0 flex justify-center items-center gap-3.5 p-4">
                    Anuncio Lateral
                </aside>
            </main>
            <Footer />
        </>
    );
}