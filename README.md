
# Hasmil

Family tree app

## Running

There are two different directories for the backend and frontend

Admin:
Username: root
Password: 123456
Please refer to Pocketbase's documentation to adjust the admin settings.
To run the backend:
```bash
cd backend
./pocketbase serve
```

To setup & run the frontend:
```bash
cd frontend
npm install
npm run dev -- --open
```

## Design

The development uses Pocketbase for the backend and Svelte/Sveltekit for the frontend


The database has been designed to support one-to-many relations between a person and multiple families, as the diagram below
![uml diagram](https://imgur.com/a/RsW6VW3.png)