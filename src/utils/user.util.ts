import jwt from 'jsonwebtoken';
import amqp from 'amqplib';

const exchange = 'myExchange';

export default class Util {
 public async tokenGen(id, secreat) {
  const token = await jwt.sign({ id: id }, secreat, { expiresIn: '1h' });
  return token;
 }

 public async tokenVerify(body, secreat) {
  const data = await jwt.verify(body, secreat);
  return data;
 }
 public async sendMessage(message) {
  try {
   const data = JSON.stringify(message);

   const client = await amqp.connect('amqp://localhost');

   const channel = await client.createChannel();

   await channel.assertExchange(exchange, 'fanout', { durable: false });

   channel.publish(exchange, '', Buffer.from(data));
   console.log(`Sent: ${data}`);
  } catch (error) {
   console.log(error);
  }
 }
}
