import("./index.js").then(({ default: useBase }) => {
    console.log(useBase);

    useBase().encode(42); // returns "Q"
});