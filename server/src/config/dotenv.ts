import "dotenv/config";

const config = {
  prot: Number(process.env.PORT),
  uri: String(process.env.MONGO_URI),
};

export default config;
