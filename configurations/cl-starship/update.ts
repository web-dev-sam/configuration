import { extractCodeBetweenMarkers, type ConfigurationPlugin } from "../../src/utils/fs";
import path from "path";
import fs from "fs";

export const update: ConfigurationPlugin["update"] = () => {
    const localFilePath1 = path.join(process.env.USER_FOLDER!, "/.config/starship.toml");
    
    const file1 = fs.readFileSync(localFilePath1, "utf-8");

    fs.writeFileSync(__dirname + "/starship.toml", file1, "utf-8");
};
