export default async function (plop) {

    plop.setGenerator("gradle:setup", {
        description: "Add gradle files",
        prompts: [],
        actions: function (data) {
            const actions = [];

            actions.push({
                type: "addMany",
                destination: "./",
                base: "templates/gradle/",
                templateFiles: "**",
                globOptions: { dot: true },
                verbose: true,
                force: true,
            });

            return actions;
        }
    });


    plop.setGenerator("gradle:module:new", {
        description: "Create a new Gradle module",
        prompts: [
            {
                type: "input",
                name: "moduleName",
                message: "Name of the module?",
            },
        ],
        actions: function (data) {
            const actions = [];

            actions.push({
                type: "addMany",
                destination: "./",
                base: "templates/module",
                templateFiles: "**",
                globOptions: { dot: true },
                verbose: true,
                force: true,
            });

            actions.push({
                type: "append",
                path: "./settings.gradle",
                templateFile: "./templates/gradle-settings-fragment.hbs",
            });

            return actions;
        }
    });
}
