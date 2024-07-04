export const fetchFlights = async ({ queryKey }) => {
  const [_key, { departureCity, destinationCity, departureDate, returnDate, passengers }] = queryKey;
  const response = await fetch(`/api/flights?departureCity=${departureCity}&destinationCity=${destinationCity}&departureDate=${departureDate}&returnDate=${returnDate}&passengers=${passengers}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};