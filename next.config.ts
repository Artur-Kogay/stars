import type { NextConfig } from "next";
import path from 'node:path'
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/shared/lib/localizations/i18n/request.ts');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  sassOptions: {
      includePaths: [
          path.join(__dirname, "./src/shared/lib/styles"),
      ]
  },
    experimental: {
        optimizePackageImports: ['jotai', '@tanstack/react-query', 'clsx', 'Swiper'],
    },
};

export default withBundleAnalyzer(withNextIntl(nextConfig));
