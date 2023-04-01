import { client } from "../index.js";

export async function studentData() {
    return await client
        .db("paripoorna")
        .collection("student")
        .find()
        .toArray();
}
export async function userData() {
    return await client
        .db("paripoorna")
        .collection("user")
        .find()
        .toArray();
}
