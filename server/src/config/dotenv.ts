import "dotenv/config";

const config = {
  prot: Number(process.env.PORT),
  uri:process.env.MONGO_URI
};

export default config;
