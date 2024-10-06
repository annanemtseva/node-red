module.exports = {
    // Загальні налаштування
    flowFile: process.env.NODE_RED_FLOW_FILE || 'flows.json',
    userDir: process.env.NODE_RED_USER_DIR || '/data/',
    httpAdminRoot: process.env.HTTP_ADMIN_ROOT || '/admin',
    httpNodeRoot: process.env.HTTP_NODE_ROOT || '/api/',
    credentialSecret: process.env.CREDENTIAL_SECRET || '', // Якщо використовуєте шифрування
    functionGlobalContext: { }, // Глобальний контекст
    telegramBotToken: process.env.TELEGRAM_BOT_TOKEN,
    webhookUrl: process.env.WEBHOOK_URL,
    editorTheme: { // Тема редактора
        page: {
            title: 'Node-RED',
            // інші параметри
        },
        header: {
            title: 'Node-RED',
            image: '', // шлях до зображення
        },
        // інші параметри
    },
    // Ви можете додати інші параметри за потреби
};

