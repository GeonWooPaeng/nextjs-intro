/** @type {import('next').NextConfig} */
const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        //source url 로 가면 destination url로 이동하는 것을 유저가 알수 있다.
        source: '/contact',
        destination: 'https://gwpaeng.tistory.com/',
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        //redirect는 하지만 url은 변하지 않는다.
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
