import { PrismaAdapter } from "@auth/prisma-adapter"
import { NextAuthOptions } from "next-auth"
import { Adapter } from "next-auth/adapters"
import { db } from "./prisma"
import GoogleProvider from "next-auth/providers/google"

export default function authOptions(): NextAuthOptions {
  return {
    adapter: PrismaAdapter(db) as Adapter,
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        authorization: {
          params: {
            scope: "openid email profile", // Inclui permissões para acessar imagem, nome e email
          },
        },
      }),
    ],
    callbacks: {
      async session({ session, user }) {
        session.user = {
          ...session.user,
          id: user.id,
          image: user.image ?? "", // Adiciona a imagem à sessão
        } as any
        return session
      },
    },
    secret: process.env.NEXT_AUTH_SECRET,
  }
}
