FROM nodered/node-red:latest

# Копіюємо ваші конфігурації, якщо потрібно
# COPY ./your-local-directory /data

# Налаштування змінних середовища (опціонально)
ENV TELEGRAM_BOT_TOKEN=7674561164:AAGibwiIYAnU9Y1PqtnMsrG6nYn4Ec20vgA
ENV WEBHOOK_URL=https://ecf40c43-0b7a-4aa6-9cae-2d0080789041.railway.app/webhook


# Порт, на якому буде працювати Node-RED
EXPOSE 1880

# Команда для запуску Node-RED
CMD ["npm", "start", "--", "--userDir", "/data"]



