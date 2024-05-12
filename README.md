# Race Pace Calculation Microservice

This project is built for calculating race pace with the given input of time in the format HH:MM:SS. It returns the calculation in both per mile and per KM.

Example:

POST Call to `https://www.nsitapara.com/api` with :

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

## API Usage

Two ways the project can be used:

1. The project can be cloned and used locally.
2. Use the deployed instance at [nsitapara.com/api](https://www.nsitapara.com/api) - Only Supports POST call.

## Use locally

To run the project locally, follow these steps:

0. Clone the repo to your machine
1. Install the project dependencies by running `npm install` in the `racepacecalc` directory.
2. Start the project by running `npm run dev`.
3. Default port is 3000 - `http://localhost:3000/api`
4. From your consumer application make a POST call to the deployed service with below payload

```json
{
  "time": "HH:MM:SS"
}
```

## Deployed

OR the user can just consume the service on a deployed instance by making a POST call with below payload to [nsitapara.com/api](https://www.nsitapara.com/api).

To calculate the race pace, make a POST call to the API(http://localhost:3000/api if using local deployment) with the following JSON payload:

```json
{
  "time": "HH:MM:SS"
}
```

POST Call to `https://www.nsitapara.com/api` with :

```json
{
  "time": "1:08:21"
}
```

Replace "HH:MM:SS" with the actual time in the format mentioned above.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.
