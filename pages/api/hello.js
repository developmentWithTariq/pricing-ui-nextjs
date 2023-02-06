
export default async function handler(req, res) {
    await sleep(2000);
  
    res.status(200).json({ hello: "world" });
  }