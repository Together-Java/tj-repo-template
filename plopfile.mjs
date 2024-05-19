export default async function (plop) {
    await plop.load("./repo/index.mjs");
    await plop.load("./project/index.mjs");
}