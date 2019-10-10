module.exports = {
    username: async (ctx: any) => {
        let username = ctx.params.username;
        ctx.response.body = `<h1>hi ${username}</h1>`;
    }
}