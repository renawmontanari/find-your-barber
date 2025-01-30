import Link from "next/link"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"

const Footer = () => {
  return (
    <footer>
      <Card className="mt-5">
        <CardContent className="mt-2 px-5">
          <div className="flex flex-row">
            <div>
              <Image src="/logo.png" width={150} height={150} alt="Logo" />
            </div>
            <div>
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

          <p className="text-center text-sm text-gray-400">
            © 2025 Copyright{" "}
            <span className="font-bold">Clube dos Barbeiros</span>
          </p>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer
