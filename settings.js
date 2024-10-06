module.exports = {
    // Загальні налаштування
    flowFile: process.env.NODE_RED_FLOW_FILE || 'flows.json',
    userDir: process.env.NODE_RED_USER_DIR || '/data/',
    
    // Налаштування доступу до адмін-панелі та API
    httpAdminRoot: process.env.HTTP_ADMIN_ROOT || '/admin',
    httpNodeRoot: process.env.HTTP_NODE_ROOT || '/api/',
    
    // Змінні середовища для токена Telegram і URL вебхука
    telegramBotToken: process.env.TELEGRAM_BOT_TOKEN || '7674561164:AAGibwiIYAnU9Y1PqtnMsrG6nYn4Ec20vgA',
    webhookUrl: process.env.WEBHOOK_URL || 'https://ecf40c43-0b7a-4aa6-9cae-2d0080789041.railway.app/webhook',
    
    // Глобальний контекст
    functionGlobalContext: { },
    
    // Налаштування редактора
    editorTheme: {
        page: {
            title: 'Node-RED',
            // інші параметри
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
    
    // Дозволи для вебхука
    webhookHandler: (req, res) => {
        res.send('Webhook received'); // Налаштуйте свою відповідь
    },
    
    // Включити всі плагіни
    // requiredNodeModules: {},
};

