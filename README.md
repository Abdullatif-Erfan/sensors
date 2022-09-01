# Setup

- Create a folder inside htdocs or any other server that you are using, ex: sensor
- Download or Clone the project inside sensor folder
- Navigate to the server directory throught CMD or Visual Studio code terminal
- Run the following command to install dependencies:

```
npm install
```

- Navigate to the client directory throught CMD or Visual Studio code terminal
- Run the following command to install dependencies:

```
npm install
```

- Navigate to the server directory and run the following command to start the server and client application at the same time:

```
npm start or yarn start
```

using concurrently plugin client and server will start working with a single command

# Testing

- Navigate to the client directory and run the following command:

```
npm run test
```

# API Endpoints

```

# Home Page
GET  http://localhost:5000/home/sensors_list
GET  http://localhost:5000/home/total_sensors
GET  http://localhost:5000/home/total_customers
GET  http://localhost:5000/home/total_open_alerts
GET  http://localhost:5000/home/sensor_temp_char


# Details Page
GET http://localhost:5000/details/msg_downtime_alert_wklyAVGTemp
GET http://localhost:5000/details/daily_temprature_chart
GET http://localhost:5000/details/system_log
GET http://localhost:5000/details/activity

```
