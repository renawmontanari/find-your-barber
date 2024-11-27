"use client"

import { SearchIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Search() {
  const [search, setSearch] = useState("")
  const router = useRouter()

  const handleSubmit = () => {
    router.push(`/barbershops?search=${search}`)
  }

  return (
    <div className="flex items-center gap-2">
      <Input
        placeholder="Encontre seu barbeiro..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button onClick={handleSubmit}>
        <SearchIcon />
      </Button>
    </div>
  )
}
