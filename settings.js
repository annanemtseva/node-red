module.exports = {
    // Загальні налаштування
    flowFile: process.env.NODE_RED_FLOW_FILE || 'flows.json',
    userDir: process.env.NODE_RED_USER_DIR || '/data/',

    // Налаштування доступу до адмін-панелі та API
    httpAdminRoot: process.env.HTTP_ADMIN_ROOT || '/admin',
    httpNodeRoot: process.env.HTTP_NODE_ROOT || '/api/',

    // Змінні середовища для токена Telegram і URL вебхука
    telegramBotToken: process.env.TELEGRAM_BOT_TOKEN || 'your-telegram-bot-token',
    webhookUrl: process.env.WEBHOOK_URL || 'https://your-project-id.railway.app/webhook',

    // Глобальний контекст
    functionGlobalContext: { },

    // Налаштування редактора
    editorTheme: {
        page: {
            title: 'Node-RED',
        },
        header: {
            title: 'Node-RED',
            image: '', // шлях до зображення
        },
    },

    // Додаткові параметри
    httpNodeCors: {
        origin: "*", // Дозволити всі домени
        credentials: true,
    },
};
