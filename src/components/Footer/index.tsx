import Link from "next/link";

export function Footer(){
    return (
        <footer className={'flex gap-4 justify-center items-center w-full bg-blue-700 h-25'}>
            <ul className={'flex gap-4 justify-center items-center'}>
                <li>Copyright - Utilidades BR</li>
                <li className={'text-white hover:text-blue-600'}><Link href={'/'}>Home</Link></li>
                <li className={'text-white hover:text-blue-600'}><Link href={'/ferramentas'}>Ferramentas</Link></li>
                <li className={'text-white hover:text-blue-600'}><Link href={'/contatos'}>Contatos</Link></li>
            </ul>
        </footer>
    );
}