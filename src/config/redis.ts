import { createClient } from 'redis';

const client = createClient();

client.connect();

// client.on('connect', () => {
//     console.error('Redis connection:', 'successfull');
//   });
// client.on('error', (err) => {
//     console.error('Redis error:', err);
//   });

export default client;
