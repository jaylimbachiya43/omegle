import Image from "next/image";
import connectToDatabase from "../utils/mongodb";
import Dashboard from "@/components/Dashboard";
export default async function Home() {
  try {
    const db = await connectToDatabase();
    console.log("Connected to the database:", db.connection.name);
    // You can perform additional checks or log more information here
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
  return <main><Dashboard/></main>;
}
