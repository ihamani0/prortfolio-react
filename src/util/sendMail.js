import { Client, Functions, ExecutionMethod } from "appwrite";

const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("67d5ad7b0033f6ec59e8");

const functions = new Functions(client);

export async function sendMail(data) {
  try {
    const result = await functions.createExecution(
      "6816b2ac0019bafa90d2",
      JSON.stringify(data),
      false, // async
      "/", // path
      ExecutionMethod.POST // method
    );
    return result;
  } catch (error) {
    console.log(error);
  }
}
