import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // In case of je sais pas, pour + tard
};

export default nextConfig;

export async function redirects() {
  return [
    {
      source: "/contact",
      destination: "/#contact",
      permanent: true,
    },
  ];
}
