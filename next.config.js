/** @type {import('next').NextConfig} */
module.exports = {
  output: 'standalone',
  images: {
    domains: [
      's3.us-west-1.amazonaws.com',
      's3.us-west-2.amazonaws.com',
      's3.us-west-3.amazonaws.com',
      's3.us-east-2.amazonaws.com',
      's3.us-east-1.amazonaws.com',
      's3.us-east-3.amazonaws.com',
      's3.us-south-1.amazonaws.com',
      's3.us-south-2.amazonaws.com',
      's3.us-south-3.amazonaws.com',
      's3.us-north-1.amazonaws.com',
      's3.us-north-2.amazonaws.com',
      's3.us-north-3.amazonaws.com',
      's3.us-central-1.amazonaws.com',
      's3.us-central-2.amazonaws.com',
      's3.us-central-3.amazonaws.com',
    ],
  },
}
