import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import logo from "../../public/assets/logo.png"
import * as React from "react"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"

export function Header() {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image src={logo} width={120} height={18} alt="Find your barber" />
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  )
}
