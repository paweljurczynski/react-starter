import { UIError } from "./UIError";
import { Repository } from "./Repository";

export type AppState = {
    ui: {
        errors: UIError[],
        loading: boolean
    },
    github: {
        repositories: Repository[],
    }
}