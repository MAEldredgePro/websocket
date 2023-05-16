Install express and socket.io
# npm i express socket.io

Install dotenv as a development dependency
# npm i -D dotenv

In package.json under scripts add the following to require the .env config
# "dev": "node -r dotenv/config app",

Run the app with
# npm run dev