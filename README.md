
# Synrgy Challenge 5

## Run Locally

Clone the project

```bash
git clone https://github.com/adhsen456/24001118-synrgy7-adh-jsc-ch-5.git
```

Go to the project directory

```bash
cd 24001118-synrgy7-adh-jsc-ch-5
```

Install dependencies

```bash
npm i
```

Start the server

```bash
npm run dev
```


## API Endpoint

### Get all data cars

```http
GET /api/v1/cars
```
cURL Request:
```http 
curl -L -X GET "http://localhost:3333/api/v1/cars"
```

### Get data car with id
```http
GET /api/v1/cars/:id
```

cURL Request:
```http 
curl -L -X GET "http://localhost:3333/api/v1/cars/2"
```

### Create new data car
```http
POST /api/v1/cars
```

cURL Request:
```http 
curl -L -X POST "http://localhost:3333/api/v1/cars" -F "name=\"BMW i502\"" -F "price=\"1500000000\"" -F "file=@\"/path/to/file\"" -F "availability=\"true\"" -F "startRent=\"05/29/2024\"" -F "finishRent=\"05/30/2024\"" 
```
> NB: Change "/path/to/file" with a path where your file is from.

### Edit data car with id
```http
PUT /api/v1/cars/:id
```

cURL Request:
```http 
curl -L -X PUT "http://localhost:3333/api/v1/cars/2" -F "name=\"Innova\"" -F "price=\"1500000\"" -F "file=@\"/path/to/file\"" -F "availability=\"true\"" -F "startRent=\"05/29/2024\"" -F "finishRent=\"05/30/2024\""
```
> NB: Change "/path/to/file" with a path where your file is from.

### Delete data car with id
```http
  DELETE /api/v1/cars/:id
```
Method: DELETE
cURL Request:
```http 
curl -L -X DELETE "http://localhost:3333/api/v1/cars/2"
```

## ERD 
![Logo](https://res.cloudinary.com/dqaixl4l8/image/upload/v1716549300/binar-synrgy/challenge-5/Screenshot_2024-05-24_at_6.14.14_PM_zt7t5j.png)
