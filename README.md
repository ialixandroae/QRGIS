# QR GIS System

Web GIS system created to provide a four-steps method to build an endless number of GIS webapps with customized title, location, basemap and theme color and accesible through an niquely generated QR code.

The app uses NodeJS and ExpressJS for API, routes creation and server-side processing and Calcite Web for front-end.

GIS capabilities and web maps are available through ArcGIS API for JavaScript.

Each GIS webapp created is hosted on the machine where the main app (project) is deployed.

## Demo & preview

![QRGISSystem](https://user-images.githubusercontent.com/18401030/77421696-904ddf80-6dcc-11ea-825c-0b6bfc0221af.gif)


##  Areas and capabilities

### Main front page

![1](https://user-images.githubusercontent.com/18401030/77418881-d2285700-6dc7-11ea-96a9-18a4d0c2eef9.png)


### QR GIS App generation

![2](https://user-images.githubusercontent.com/18401030/77419026-08fe6d00-6dc8-11ea-90ef-2360b7448d18.png)


### Front page modal

![4](https://user-images.githubusercontent.com/18401030/77418928-e0767300-6dc7-11ea-91d1-81668c8b6f27.png)


### All generated apps

![3](https://user-images.githubusercontent.com/18401030/77419067-1ddb0080-6dc8-11ea-9365-090572a13dfb.png)


### Back-end webapp created after clicked 'Create app'

When the user clicks 'Create app' button, a folder on the back-end is created. The name of the folder is generated by a unique id in format: **ie4l3esk85rzksf**.

Inside the folder, a HTML file is created with the necessary code to render the app. The name of the file is **index.html**.

The data for every generated WebGIS application toghether with the QR code (base64 encoded) is saved in a **data.json** file.

![5](https://user-images.githubusercontent.com/18401030/77419406-a5c10a80-6dc8-11ea-8557-5601522e79cd.png)


### Scanning the QR code and accesing the map

For scanning the QR codes I`ve used a desktop application which can scan print screens copied in clipboard.

![7](https://user-images.githubusercontent.com/18401030/77419985-9098ab80-6dc9-11ea-8509-249eeeefac38.png)

The application will return the URL for accessing the WebGIS map.

Accesing the URL in the browser will open the map.

![6](https://user-images.githubusercontent.com/18401030/77420057-aad28980-6dc9-11ea-992b-d63e210a5cf7.png)


##  Getting started | Using the app

### Installing

Download the repository and install the dependencies:

```
$ npm install
```

### Running

Build and run nodemon

```
$ npm run start
```

## Resources
The following resources have been used to create this application:
* <a target="blank" href="https://nodejs.org/en/">NodeJS</a>
* <a target="blank" href="https://expressjs.com/">ExpressJS</a>
* <a target="blank" href="https://developers.arcgis.com/javascript/">ArcGIS API for JavaScript 4.14</a>
* <a target="blank" href="http://esri.github.io/calcite-web/">Calcite Web</a>
* <a target="blank" href="https://www.npmjs.com/package/qrcode">Node-qrcode package</a>
* <a target="blank" href="https://nodemon.io/">Nodemon</a>
