import { App, Plugin } from "vue";

let currentApp: App;

function ExposeContextPlugin():Plugin{
    return {
        install(app) {
            currentApp = app;
        }
    }
}

export function getCurrentApp():App{
    return currentApp;
}

export function getPlugin<T>(plugin: string):T{
    return currentApp.config.globalProperties["$"+plugin];
}

export default function ExposeContext():Plugin{
    return ExposeContextPlugin();
}
