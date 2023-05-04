// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from '../../utiles/dbConnect';

export default async function handler(req, res) {
 try {
    await dbConnect();
    console.log('Database connected successfully');
 } catch (error) {
  console.log(error);
 }
}
