'use strict'

const User = require('./user') // const POST = require ('')

async function init() {
    await User.sync();
    // await Post.sync()
    // sync the model
    // also sync any extra models here
}

init();

module.exports = {
    User,
    // export the model
    // also export any extra mdoels here
}