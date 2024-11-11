import { Barbershop } from "@prisma/client"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"

interface BarbershopItemProps {
  barbershop: Barbershop
}

export function BarbershopItem({ barbershop }: BarbershopItemProps) {
  return (
    <Card>
      <CardContent>
        {/* Imagem */}
        <div className="relative h-[159px]">
          <Image fill className="object-contain" src={barbershop.imageUrl} />
        </div>
      </CardContent>
    </Card>
  )
}
