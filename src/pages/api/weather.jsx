export default async function Weather(req, res) {
  const response = await fetch(
    `${process.env.REACT_APP_OW_API_URL}/weather/?q=Tokyo&APPID=${process.env.REACT_APP_OW_API_KEY}&lang=ja`,
  );

  const data = await response.json();

  res.status(200).json(data);
}
