# MERN Auth using Redux-Toolkit and JWT
Authantication using Redux-Toolkit and JWT, built with the MERN stack and Tailwind CSS.  

## Installation and usage
1) Clone this repository  
```
git clone https://github.com/vatsalpipalava/MERN-Authentication-.git
```
2) Install dependencies  
```
cd server
npm install
cd client
npm install
```
3) Configure environment variables in your new .env file. To acquire your MONGO_URI, create a cluster for free over at https://www.mongodb.com/.

4) Create config.env in server's root directory. Add following lines
```
DATABASE = <MongoDB Cluster URL>
PORT = 5000
SECRET_KEY = <Random minimum 32 words secret key for jwt token>
```
5) Run the Server (Backend)
```
cd server
npm run dev
```
6) Run the Client (Frontend)
```
cd client
npm start
```