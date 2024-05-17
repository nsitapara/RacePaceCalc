# Race Pace Calculation for 10K Microservice

This project is built for calculating race pace with the given input of time in the format HH:MM:SS. It returns the calculation in both per mile and per KM.

UML sequence diagram:
![alt text](<UML Sequence Assignment 8.svg>)

Example Usage:

POST Call to `https://www.nsitapara.com/api/race-pace` with :

```json
{
  "time": "1:50:20"
}
```

Response:

```json
{
  "pacePerMile": "17:45",
  "pacePerKm": "11:02"
}
```
Below is a javascript code example of call that can be made from the backend.
```javascript
async function makeFetchCall(time) {
  const url = "https://www.nsitapara.com/api/race-pace";
  const data = { time };

  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      const result = await response.json();
      console.log(result);
    } else {
      console.error("Error:", response.status);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

// User input
const userInput = "00:50:08";

console.log("User input: ", userInput);
// Call the function with user input

makeFetchCall(userInput);
```

## API Usage

Two ways the project can be used:

1. Use the deployed instance at [https://www.nsitapara.com/api/race-pace](https://www.nsitapara.com/api/race-pace)

2. Clone the project and used locally or with your deployment.

## Deployed (Easier)

The user can just consume the service on a deployed instance by making a POST call with below payload to [nsitapara.com/api/race-pace](https://www.nsitapara.com/api/race-pace).

```json
{
  "time": "HH:MM:SS"
}
```

Replace "HH:MM:SS" with the actual time in the format mentioned above.

### Example

POST Call to `https://www.nsitapara.com/api/race-pace` with :

```json
{
  "time": "00:50:20"
}
```

Returned Data:

```json
{
  "pacePerMile": "00:08:06",
  "pacePerKm": "00:05:02"
}
```

## Use locally

To run the project locally, follow these steps:

0. Clone the repo to your machine
1. Install the project dependencies by running `npm install` in the `racepacecalc` directory.
2. Start the project by running `npm run dev`.
3. Default port is 3000 - `http://localhost:3000`
4. From your consumer application make a POST call to the deployed service with below payload
5. Only allowed endpoint is `http://localhost:3000/api/race-pace`

```json
{
  "time": "HH:MM:SS"
}
```

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.
