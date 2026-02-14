import Link from "next/link";

type NavegationProps = {
    name: string;
}

export function Navegation({ name }: NavegationProps) {
    const links = [
        { id: 'ferramentas', label: 'Todas as Ferramentas', href: '/ferramentas', width: 'w-22' },
        { id: 'trabalhistas', label: 'Trabalhistas', href: '/trabalhistas', width: 'w-22' },
        { id: 'saude',        label: 'Saúde',        href: '/saude',        width: 'w-15' },
        { id: 'consultas',    label: 'Consultas',    href: '/consultas',    width: 'w-18' }
    ];

    return (
        <>
            <div>
                <h1 className={'font-bold'}>Navegação rápida:</h1>
            </div>
            <nav className={'flex flex-col gap-2.5 text-base'}>
                {links.map((link) => {
                    const isActive = name === link.id;

                    return (
                        <Link
                            key={link.id}
                            href={link.href}
                            className={`${link.width} hover:text-blue-600 ${isActive ? 'text-blue-600 font-bold' : 'text-gray-600'}`}
                        >
                            {link.label}
                        </Link>
                    )
                })}
            </nav>
        </>
    );
}