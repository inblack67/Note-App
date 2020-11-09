export const __prod__ = process.env.NODE_ENV === 'production';

export const getServerUrl = () => __prod__ ? process.env.NEXT_PUBLIC_PROD_SERVER_URL : process.env.NEXT_PUBLIC_DEV_SERVER_URL;