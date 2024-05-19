# TJ Repository Template
This repo using the popular tool [PLOP](https://plopjs.com/) to generate repository boilerplate.

## Usage
1. Clone this repository, it needs to be available on your machine
2. Run `npm install -g plop` this will install Plop 
3. Start applying templates!

## Applying Templates
To apply templates to your repository:

1. Ensure your terminal is pointed to the root of this project
2. Run the following command: `npm run plop -- --dest test` setting the destination to the location of the repository that you want the templates to be generated in

## Available Options
The following options are available:

### `repo:init`
`.dotFiles`: This will add `.` files into the repository. An example is the `.gitignore` file.

`GitHub Workflows`: This option will create all the GitHub workflow files that are required.

`Repo documentation`: This will add documentation such as LICENSE and CODEOWNERS

### `gradle:setup`
This option will add all the files needed for a multi module gradle project.

### `gradle:module:new`
This option will create a gradle module within the project. The command takes 1 input which is the module name, for this it's best to have this lowercase with no spaces.
Note: `settings.gradle` must be present in the root. This would have been created when running `gradle:setup`