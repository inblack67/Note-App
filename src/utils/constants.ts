export const __prod__ = process.env.NODE_ENV === 'production';

export const getClientURL = () => __prod__ ? process.env.PROD_CLIENT_URL : process.env.DEV_CLIENT_URL;