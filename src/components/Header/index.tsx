import Link from 'next/link'

export function Header(){
    return (
        <>
            <header className={'flex justify-between items-center shadow-sm p-3'}>
                <div className={'flex gap-5'}>
                    <img src="" alt="Imagem aqui"/>
                    <h1>Utilidades BR</h1>
                </div>
                <nav>
                    <ul className="flex gap-6 text-gray-600 font-medium">
                        <li>
                            <Link href="/" className="hover:text-blue-600 transition-colors">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/ferramentas" className="hover:text-blue-600 transition-colors">
                                Ferramentas
                            </Link>
                        </li>
                        <li>
                            <Link href="/contatos" className="hover:text-blue-600 transition-colors">
                                Contatos
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}