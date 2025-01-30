import Link from "next/link"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"

const Footer = () => {
  return (
    <footer>
      <Card className="mt-5">
        <CardContent className="mt-2 px-5">
          <div className="mt-5 flex flex-row justify-between">
            <div>
              <Image src="/logo.png" width={150} height={150} alt="Logo" />
              <p className="mt-3 text-sm text-gray-500">
                Encontre o seu melhor barbeiro na cidade
              </p>
            </div>
            <div className="text-sm text-gray-500">
              <ul>
                <li>
                  <Link href="/about">Sobre nós</Link>
                </li>
                <li>
                  <Link href="/faq">FAQ</Link>
                </li>
                <li>
                  <Link href="/contato">Contato</Link>
                </li>
                <li>
                  <Link href="/termos-de-uso">Termos de uso</Link>
                </li>
                <li>
                  <Link href="/politica-de-privacidade">
                    Política de privacidade
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <p className="mt-7 text-center text-sm text-gray-400">
            © 2025 Copyright{" "}
            <span className="font-bold">Clube dos Barbeiros</span>
          </p>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer
