export default async function Healthcheck(req, res) {
  const response = await fetch(
    `${process.env.REACT_APP_API_DOMEIN}/healthcheck`,
  );

  const data = await response.json();

  res.status(200).json(data);
}
