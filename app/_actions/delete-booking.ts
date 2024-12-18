"use server"

import { db } from "../_lib/prisma"

export default async function deleteBooking(bookingId: string) {
  await db.booking.delete({ where: { id: bookingId } })
}
