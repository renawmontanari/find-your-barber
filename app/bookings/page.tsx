import { getServerSession } from "next-auth"
import { Header } from "../_components/header"
import { db } from "../_lib/prisma"
import authOptions from "../_lib/auth"
import { notFound } from "next/navigation"
import { BookingItem } from "../_components/booking-item"

export default async function Bookings() {
  const session = await getServerSession(authOptions())
  if (!session?.user) {
    // Mostrar popup de login
    return notFound()
  }
  const bookings = await db.booking.findMany({
    where: {
      userId: (session.user as any).id,
    },
    include: {
      service: true,
    },
  })
  return (
    <>
      <Header />
      <div className="p-5">
        <h1 className="text-xl font-bold">Agendamentos</h1>
        {bookings.map((booking) => (
          <BookingItem key={booking.id} booking={booking} />
        ))}
      </div>
    </>
  )
}
