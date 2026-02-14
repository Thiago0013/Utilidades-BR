import React, {useState} from "react";
import {InputConfig} from "@/components/InputConfig";

export function Calculator(){
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    const [resultado, setResultado] = useState<number | null>(null);
    const [cor, setCor] = useState("bg-gray-400");


    const definirCor = (imc: number) => {
        if (imc < 18.5) return "bg-blue-500";
        if (imc < 25)   return "bg-green-500";
        if (imc < 30)   return "bg-yellow-400";
        if (imc < 35)   return "bg-orange-500";
        if (imc < 40)   return "bg-rose-600";
        return "bg-amber-900";
    };

    const handleCalcular = (e: React.FormEvent) => {
        e.preventDefault();

        const numberPeso = parseFloat(peso.replace(',', '.'));
        let numberAltura = parseFloat(altura.replace(',', '.'));

        if (numberAltura > 3){
            numberAltura = numberAltura / 100;
        }

        const imc = numberPeso / (numberAltura * numberAltura);


        setCor(definirCor(imc))
        setResultado(imc);
    }
    return(
        <>
            <form
                onSubmit={handleCalcular}
                className="flex-1 p-4 rounded flex flex-col gap-4"
            >
                <InputConfig
                    labelText={"Peso (kg)"}
                    type={"number"}
                    onChange={(e) => setPeso(e.target.value)}
                    placeholder={"EX: 77.5"}
                    required
                    />

                <InputConfig
                    labelText={"Altura (m)"}
                    type={'number'}
                    onChange={(e)=> setAltura(e.target.value)}
                    placeholder={'EX: 1.82'}
                    required
                />

                <button
                    type="submit"
                    className="w-32 m-auto mt-2 bg-blue-600 text-white p-2 cursor-pointer rounded hover:bg-blue-700 transition"
                >
                    Calcular IMC
                </button>
            </form>

            <div className="relative w-40 h-40 flex justify-center items-center mx-auto mt-6">
                {resultado !== null && (
                    <div className={`absolute -inset-4 rounded-full ${cor} blur-2xl opacity-50 animate-pulse -z-10`}></div>
                )}
                <div className={`relative flex flex-col justify-center items-center rounded-full ${cor} w-full h-full z-10 shadow-sm`}>
                    <h2 className={`text-xl font-bold`}>Seu IMC:</h2>
                    <p className={`text-xl font-bold text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]`}>
                         {resultado ? resultado.toFixed(2) : "0.00"}
                    </p>
                </div>
            </div>

        </>
    );
}