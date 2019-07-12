let ret = {}

try {
    throw new Error();
} catch (e) {
    ret.lastLineError = e;
}

module.exports = ret;