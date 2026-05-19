import type { NextConfig } from "next";

const PERMANENT_REDIRECT_STATUS = 301;

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.mundialchurrasqueiras.com.br",
          },
        ],
        destination: "https://mundialchurrasqueiras.com.br/:path*",
        statusCode: PERMANENT_REDIRECT_STATUS,
      },
      {
        source: "/home",
        destination: "/",
        statusCode: PERMANENT_REDIRECT_STATUS,
      },
      {
        source: "/author/mundialchurrasqueiras",
        destination: "/sobre",
        statusCode: PERMANENT_REDIRECT_STATUS,
      },
      {
        source: "/pre-moldada",
        destination: "/produto/churrasqueira-pre-moldada",
        statusCode: PERMANENT_REDIRECT_STATUS,
      },
      {
        source: "/produto/carvao-vegetal",
        destination: "/produto/churrasqueira-bafo-aluminio",
        statusCode: PERMANENT_REDIRECT_STATUS,
      },
      {
        source: "/produto/kit-fogo-de-chao",
        destination: "/produto/kit-fogo-de-chao-espeto-braseiro",
        statusCode: PERMANENT_REDIRECT_STATUS,
      },
      {
        source: "/produto/churrasqueira-movel-portatil",
        destination: "/produto/churrasqueira-movel-portatil-com-rodas",
        statusCode: PERMANENT_REDIRECT_STATUS,
      },
      {
        source: "/produto/churrasqueira-bafo",
        destination: "/produto/churrasqueira-bafo-media-aluminio",
        statusCode: PERMANENT_REDIRECT_STATUS,
      },
      {
        source: "/produto/churrasqueira-portatil",
        destination: "/produto/mini-tambor-bafo",
        statusCode: PERMANENT_REDIRECT_STATUS,
      },
    ];
  },
};

export default nextConfig;
