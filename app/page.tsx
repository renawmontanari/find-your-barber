import { SearchIcon } from "lucide-react"
import { Header } from "./_components/header"
import { Input } from "./_components/ui/input"
import { Button } from "./_components/ui/button"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import { db } from "./_lib/prisma"
import { BarbershopItem } from "./_components/barbershop-item"

export default async function Home() {
  const barbershops = await db.barbershop.findMany({})
  return (
    <div>
      {/* Header */}
      <Header />
      <div className="p-5">
        <h2 className="text-xl">Olá, Renan!</h2>
        <p>Quinta-feira, 7 de novembro.</p>

        {/* Search */}
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Encontre seu barbeiro..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        {/* Image */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/assets/banner-01.png"
            fill
            className="rounded-xl object-cover"
            alt="Agende nos melhores com NSF Barber"
          />
        </div>

        {/* Scheduling */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Agendamentos
        </h2>

        <Card>
          <CardContent className="flex justify-between p-0">
            {/* Esquerda */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de cabelo</h3>

              <div className="flex items-center">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://thumbs.dreamstime.com/b/imagem-redonda-do-avatar-dos-desenhos-animados-ilustra-o-da-arte-vetor-143071694.jpg" />
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>
            </div>
            {/* Direita */}
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Novembro</p>
              <p className="text-2xl">08</p>
              <p className="text-sm">13:30</p>
            </div>
          </CardContent>
        </Card>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>

        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  )
}
