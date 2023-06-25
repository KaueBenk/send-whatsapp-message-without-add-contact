'use client'
import Image from 'next/image'

function handleSubmit(event) {
  event.preventDefault()
  const phone = event.target.phone.value
  const url = `https://api.whatsapp.com/send?phone=55${phone}`
  window.open(url, '_blank')
}

export default function Home() {

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-whatsapp-white">
      <header className="flex flex-col items-center justify-center p-5">
        <Image
          src="/WhatsApp Logo.png"
          alt="WhatsApp logo"
          width={150}
          height={150}
        />
      </header>
      <div className="flex flex-col items-center justify-center grow">
        <h1 className="text-4xl font-bold mt-8 text-center px-5">
          Enviar Mensagem sem Adicionar o Contato
        </h1>
        <p className="text-xl mt-4">
          Digite o número com DDD e envie sua mensagem.
        </p>
        <form className="flex flex-col items-center justify-center mt-8" onSubmit={handleSubmit}>
          <label htmlFor="phone" className="sr-only">Número de Telefone</label>
          <input type="tel" name="phone" id="phone" placeholder="(11) 91234-5678" className="w-80 p-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          <button type="submit" className="flex transition-colors	items-center mt-4 px-4 py-2 font-medium rounded-full shadow-sm bg-teal-green-light hover:bg-white hover:text-black-500 focus:outline-none focus:ring-2 focus:ring-white-500 focus:ring-offset-2">
            Enviar Mensagem
            <Image
              src="/WhatsApp Send Icon.png"
              alt="WhatsApp send icon"
              width={20}
              height={20}
              className="ml-2"
            />
          </button>
        </form>
      </div>
    </main>
  )
}
