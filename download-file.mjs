import axios from "axios";
import * as fs from "fs";

downloadFile(
  "https://api.cinode.com/swagger/v0.1/swagger.json",
  "./cinode-swagger.json"
)
  .then(() => console.log("File downloaded successfully"))
  .catch((error) =>
    console.error(`Error downloading file: ${error.message}`)
  );

async function downloadFile(url, dest){
  const response = await axios.get(url, { responseType: "stream" });
  const writer = fs.createWriteStream(dest);

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on("finish", resolve);
    writer.on("error", reject);
  });
}
