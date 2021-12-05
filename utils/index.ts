const isProd = process.env.PRODUCTION === 'true';

const prefix = isProd ? process.env.NEXT_PUBLIC_BASE_PATH : '';

export { prefix };