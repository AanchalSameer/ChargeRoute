
# Charge Route: EV Range Estimation & Charging Station Finder

![image](https://github.com/user-attachments/assets/76f3fb58-97b5-4aa5-87e5-290d80534364)



## Overview
Charge Route is a web application designed to help electric vehicle (EV) owners manage their journeys by estimating their vehicle's range based on current battery levels and locating nearby charging stations. By leveraging the Google Maps API, the app provides a seamless way for users to navigate their surroundings, find the closest charging stations, and plan efficient routes. The application integrates geospatial algorithms and a simple yet effective greedy approach to ensure users can reach their destinations without range anxiety.

## Features
### Range Calculator:

Allows users to input their EV's battery level or an estimated range, providing feedback on the maximum travel distance.
The app uses predefined data about the EV's consumption rates to estimate the range based on the battery percentage.



### Map Display:

Utilizes the Google Maps API to display a visual map showing the user's current location and nearby charging stations.
Interactive map with detailed information about each charging station, including address, charging speed, and availability status (if integrated).




### Seamless User Interface:

A clean and responsive design ensures easy navigation for users across different devices.
Consistent layout and styling for a user-friendly experience.

![image](https://github.com/user-attachments/assets/db2a2b64-40e3-49bb-9862-2cac574aeb88)

## How It Works
### Input the Battery Level:

Users can enter the remaining battery percentage of their EV or an estimated driving range in kilometers. The application will calculate how far the EV can travel based on these inputs.

![image](https://github.com/user-attachments/assets/55cd8ba4-4a8d-4128-b2e9-f1b80728c628)


### Range Calculation:

The app calculates the expected travel distance based on the user's input using a simple range calculation formula. It considers the EV's typical consumption rates and outputs an estimated range.
### Finding Charging Stations:

The app employs geospatial algorithms to find nearby charging stations. Using the Google Maps API, it retrieves data about nearby locations, filters the results, and displays them on the map.
The greedy algorithm ensures the closest charging station is prioritized, offering a quick recommendation for users needing to charge their EVs urgently.

![image](https://github.com/user-attachments/assets/4a4adbf8-d6c0-4db1-841c-a083dfd7471e)


### Map Display:

A visual map with interactive markers shows charging stations around the user’s current location.
Users can click on a charging station to get detailed information, including the station's address, type, and distance from their location.

![image](https://github.com/user-attachments/assets/c2fc2a0c-5494-459d-aaa5-193a925ed473)


## Project Structure:

![image](https://github.com/user-attachments/assets/0fd5825d-5dd4-4ac7-9467-b22bf4de6d0d)


## Technologies Used
#### 1. Frontend: React, HTML, CSS, JavaScript
#### 2. Backend: Node.js, Express
#### 3. APIs: Google Maps API, Places API
#### 4. Algorithms: Geospatial, Greedy Algorithm

