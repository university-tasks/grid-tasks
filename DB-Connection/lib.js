const getRandomInt = (max) => Math.floor(Math.random() * max);

const executionTime = (func) => {
    const inner = async (...args) => {
        const start = new Date().getTime();
        const result = await func(...args);
        const stop = new Date().getTime();
        return {
            result,
            executionTime: `${stop - start}ms`,
        };
    };

    return inner;
};

module.exports = {
    getRandomInt,
    executionTime,
};
