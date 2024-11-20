import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import logo from "../../public/assets/logo.png"
import * as React from "react"
import { Button } from "./ui/button"
import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { quickSearchOptions } from "../_constants/search"
import { Avatar, AvatarImage } from "@radix-ui/react-avatar"
import Link from "next/link"

export function Header() {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image src={logo} width={120} height={18} alt="Find your barber" />

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent className="overflow-y-auto">
            <SheetHeader>
              <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>

            <div className="flex items-center gap-3 border-b border-solid p-5">
              <Avatar>
                <AvatarImage
                  src="https://avatar.iran.liara.run/public"
                  width={40}
                  height={40}
                />
              </Avatar>

              <div>
                <p className="font-bold">Renan Willian</p>
                <p className="text-xs">rwmontanari@gmail.com</p>
              </div>
            </div>

            <div className="flex flex-col gap-1 border-b border-solid p-5">
              <SheetClose asChild>
                <Button className="justify-start gap-2" variant="ghost" asChild>
                  <Link href="/">
                    <HomeIcon size={18} />
                    Inicio
                  </Link>
                </Button>
              </SheetClose>
              <Button className="justify-start gap-2" variant="ghost">
                <CalendarIcon size={18} />
                Agendamentos
              </Button>
            </div>

            <div className="flex flex-col gap-1 border-b border-solid p-5">
              {quickSearchOptions.map((option) => (
                <Button
                  key={option.title}
                  className="justify-start gap-2"
                  variant="ghost"
                >
                  <Image
                    src={option.imageUrl}
                    width={18}
                    height={18}
                    alt={option.title}
                  />
                  {option.title}
                </Button>
              ))}
            </div>

            <div className="flex flex-col gap-1 p-5">
              <Button variant="ghost" className="justify-start gap-2">
                <LogOutIcon size={18} />
                Sair da conta
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  )
}
