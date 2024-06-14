'use client'
import React from "react";
import Link from "next/link";

const Home = ({ }) => {
    return (
        <main className="min-h-screen bg-violet-200 flex items-center justify-center p-10">
            <div className="max-w-4xl h-full bg-white shadow-xl rounded-lg p-8">
                <h1 className="text-3xl font-bold mb-6 text-center text-purple-800">Dositio</h1>
                <section className="mb-6 overflow-y-auto max-h-96">
                    <h2 className="text-2xl font-semibold mb-2 text-gray-800">O que é Dosito?</h2>
                    <p className="text-gray-600">
                        É uma aplicação que permite você navegar por uma lista produtos. Fizemos o uso de uma API para gerenciar e listar todos os produtos disponíveis.
                    </p>
                </section>
                <section className="mb-6 overflow-y-auto max-h-96">
                    <h2 className="text-2xl font-semibold mb-2 text-gray-800">Listagem de Produtos</h2>
                    <p className="list-disc list-inside text-gray-600">
                        <strong>Mostra uma lista com todos os Produtos Disponíveis na API:</strong> A listagem contém informações dos produtos, tais como: <strong>nome, quantidade e categoria.</strong>
                    </p>
                </section>
                <section className="mb-6 overflow-y-auto max-h-96">
                    <h2 className="text-2xl font-semibold mb-2 text-gray-800">Como Funciona?</h2>
                    <p className="text-gray-600">
                        A listagem de produtos é feita através de uma integração com a API, que coleta dados diretamente do banco de dados e fazendo a exibição.
                    </p>
                </section>
                <section className="mb-6 overflow-y-auto max-h-96">
                    <h2 className="text-2xl font-semibold mb-2 text-gray-800">Faça o login e confira!</h2>
                    <p className="text-gray-600">
                        Basta clicar e efetuar o login para começar a explorar a aplicação.
                    </p>
                </section>
                <div className='flex justify-end'>
                    <Link href="/login" className=' inline-block px-4 py-2 rounded font-bold mb-2 bg-purple-800 text-white'>Login</Link>
                </div>
            </div>
        </main>
    );
};

export default Home;