import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/produto/carvao-vegetal",
        destination: "/produto/churrasqueira-bafo-aluminio",
        permanent: true,
      },
      {
        source: "/produto/kit-fogo-de-chao",
        destination: "/produto/kit-fogo-de-chao-espeto-braseiro",
        permanent: true,
      },
      {
        source: "/produto/churrasqueira-movel-portatil",
        destination: "/produto/churrasqueira-movel-portatil-com-rodas",
        permanent: true,
      },
      {
        source: "/produto/churrasqueira-bafo",
        destination: "/produto/churrasqueira-bafo-media-aluminio",
        permanent: true,
      },
      {
        source: "/produto/churrasqueira-portatil",
        destination: "/produto/mini-tambor-bafo",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
