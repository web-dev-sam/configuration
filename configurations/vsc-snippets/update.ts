import { extractCodeBetweenMarkers, type ConfigurationPlugin } from "../../src/utils/fs";
import path from "path";
import fs from "fs";

export const update: ConfigurationPlugin["update"] = () => {
    const jsFile = path.join(process.env.USER_FOLDER!, "AppData\\Roaming\\Code\\User\\snippets\\javascript.json");
    const tsFile = path.join(process.env.USER_FOLDER!, "AppData\\Roaming\\Code\\User\\snippets\\typescript.json");
    
    fs.writeFileSync(__dirname + "/javascript.json", fs.readFileSync(jsFile, "utf-8"), "utf-8");
    fs.writeFileSync(__dirname + "/typescript.json", fs.readFileSync(tsFile, "utf-8"), "utf-8");
};
