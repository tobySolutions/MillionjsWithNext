import million from 'million/compiler';
 
const withMillion = million.next();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

export default withMillion(nextConfig);
