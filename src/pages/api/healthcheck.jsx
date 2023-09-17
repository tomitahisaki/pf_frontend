export default async function Healthcheck(req, res) {
  const response = await fetch(
    `${process.env.RAILS_BASE_API}/healthcheck`,
  );

  const data = await response.json();

  res.status(200).json(data);
}
