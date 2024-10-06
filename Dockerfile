# Визначаємо базовий образ
FROM nodered/node-red:latest

# Копіюємо файл налаштувань
COPY settings.js /data/

# Вказуємо, що порт 1880 буде використовуватись
EXPOSE 1880

# Команда для запуску Node-RED
CMD ["npm", "start", "--", "--userDir", "/data"]
