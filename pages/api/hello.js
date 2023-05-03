// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// hossam
// import dbConnect from "../../utiles/dbConnect";

// export default async function handler(req, res) {
//     try {
//         await dbConnect();
//         console.log("Database connected successfully");
//     } catch (error) {
//         console.log(error);
//     }
// }

//Ahmed Magdy
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mongodb = require("mongodb");
import clientPromise from "../../util/db.connect";

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("next_test");
    // let myPost = await db.collection("test").insertOne({name:"mego"});
    // console.log(myPost);
    res.status(200).json({ message: "Database connected successfully" });
}
