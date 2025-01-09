import { Card, CardContent } from "./ui/card"

const Footer = () => {
  return (
    <footer>
      <Card className="mt-4">
        <CardContent className="mt-2 px-5">
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
