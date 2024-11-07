import { SearchIcon } from "lucide-react"
import { Header } from "./_components/header"
import { Input } from "./_components/ui/input"
import { Button } from "./_components/ui/button"

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
      </div>
    </div>
  )
}
