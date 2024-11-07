import { SearchIcon } from "lucide-react"
import { Header } from "./_components/header"
import { Input } from "./_components/ui/input"
import { Button } from "./_components/ui/button"
import Image from "next/image"

export default function Home() {
  return (
    <div>
      {/* Header */}
      <Header />
      <div className="p-5">
        <h2 className="text-xl">Olá, Renan!</h2>
        <p>Quinta-feira, 7 de novembro.</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Encontre seu barbeiro..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/assets/banner-01.png"
            fill
            className="rounded-xl object-cover"
            alt="Agende nos melhores com NSF Barber"
          />
        </div>
      </div>
    </div>
  )
}
