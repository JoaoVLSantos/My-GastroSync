import withPWA from "@ducanh2912/next-pwa";

const withPWAFunc = withPWA({
  dest: "public"
});

const nextConfig = {
  reactStrictMode: true
};

export default withPWAFunc(nextConfig);