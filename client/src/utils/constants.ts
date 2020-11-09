export const __prod__ = process.env.NODE_ENV === 'production';

export const serverUrl = __prod__ ? process.env.PROD_SERVER_URL : process.env.DEV_SERVER_URL;