const core = require('@actions/core');
const main = require('./src/main');

async function run() {
    try {
        const webhookUrlInputId = 'webhookUrl';
        core.setSecret(webhookUrlInputId);
        const webhookUrlInput = core.getInput(webhookUrlInputId, { required: true });
        const message = core.getInput('message', { required: true });
        const annotations = core.getInput('annotations');
        const status = core.getInput('status');
        const title = core.getInput('title');
        const titleBackgroundColor = core.getInput('titleBackgroundColor');

        await main(webhookUrlInput, message, annotations, {
            status,
            title,
            titleBackgroundColor,
        });
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
