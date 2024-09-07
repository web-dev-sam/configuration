import { type ConfigurationPlugin } from "../../src/utils/fs";
import path from "path";
import fs from "fs";

export const update: ConfigurationPlugin["update"] = () => {
    const file = path.join(process.env.USER_FOLDER!, "AppData\\Roaming\\Code\\User\\keybindings.json");
    
    fs.writeFileSync(__dirname + "/keybindings.jsonc", fs.readFileSync(file, "utf-8"), "utf-8");
};