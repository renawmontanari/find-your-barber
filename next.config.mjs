/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "utfs.io",
      },
      {
        hostname: "lh3.googleusercontent.com", // Domínio das imagens de perfil do Google
      },
    ],
  },
}

export default nextConfig
