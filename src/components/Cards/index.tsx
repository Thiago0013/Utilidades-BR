import {LucideIcon, MapPinned} from "lucide-react";

type CardProps = {
    icon : LucideIcon;
    title: string;
    description: string;

}

export function Cards({title, description, icon: Icon}: CardProps){
    return(
            <div className={'w-70'}>
                <Icon size={62} color={'#85cfff'}/>
                <h2 className={'text-2xl text-gray-950 mt-4'}>{title}</h2>
                <p className={'text-gray-950 h-40 mt-2'}>{description}</p>
                <div className={'flex justify-center items-center'}>
                    <button className={'bg-blue-700 m-auto cursor-pointer w-60 h-10 rounded-lg hover:brightness-80'}>Acessar</button>
                </div>
            </div>
    );
}