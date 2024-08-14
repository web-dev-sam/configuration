import { extractCodeBetweenMarkers, type ConfigurationPlugin } from "../../src/utils/fs";
import path from "path";
import fs from "fs";

export const update: ConfigurationPlugin["update"] = () => {
    const localFilePath1 = path.join(process.env.USER_FOLDER!, ".bashrc");
    const localFilePath2 = path.join(process.env.USER_FOLDER!, ".bashrcdescription");
    
    const file1 = fs.readFileSync(localFilePath1, "utf-8");
    const file2 = fs.readFileSync(localFilePath2, "utf-8");

    fs.writeFileSync(__dirname + "/.bashrc", extractCodeBetweenMarkers(file1), "utf-8");
    fs.writeFileSync(__dirname + "/.bashrcdescription", file2, "utf-8");
};
