
# Charge Route: EV Range Estimation & Charging Station Finder
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

## How It Works
### Input the Battery Level:

Users can enter the remaining battery percentage of their EV or an estimated driving range in kilometers. The application will calculate how far the EV can travel based on these inputs.
### Range Calculation:

The app calculates the expected travel distance based on the user's input using a simple range calculation formula. It considers the EV's typical consumption rates and outputs an estimated range.
### Finding Charging Stations:

The app employs geospatial algorithms to find nearby charging stations. Using the Google Maps API, it retrieves data about nearby locations, filters the results, and displays them on the map.
The greedy algorithm ensures the closest charging station is prioritized, offering a quick recommendation for users needing to charge their EVs urgently.
### Map Display:

A visual map with interactive markers shows charging stations around the user’s current location.
Users can click on a charging station to get detailed information, including the station's address, type, and distance from their location.
## Project Structure:
![image](https://github.com/user-attachments/assets/ad02554a-667b-4aff-9351-010bf1dec54f)

## Technologies Used
#### 1. Frontend: React, HTML, CSS, JavaScript
#### 2. Backend: Node.js, Express
#### 3. APIs: Google Maps API, Places API
#### 4. Algorithms: Geospatial, Greedy Algorithm

