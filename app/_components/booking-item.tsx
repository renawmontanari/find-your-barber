import { Avatar, AvatarImage } from "../_components/ui/avatar"
import { Badge } from "../_components/ui/badge"
import { Card, CardContent } from "./ui/card"

// Todo: receber agendamento como prop
export function BookingItem() {
  return (
    <>
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
              <p className="pl-1 text-sm">Barbearia FSW</p>
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
    </>
  )
}
