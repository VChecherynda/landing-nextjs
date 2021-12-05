const isProd = process.env.PRODUCTION === 'true';

const prefix = isProd ? process.env.PRODUCTION_NEXT_JS_PATH : '';

export { prefix };