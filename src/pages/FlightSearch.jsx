import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { useQuery } from "@tanstack/react-query";
import { fetchFlights } from "@/lib/api";
import BookingConfirmation from "./BookingConfirmation";

const FlightSearch = () => {
  const [departureCity, setDepartureCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [passengers, setPassengers] = useState(1);
  const [selectedFlight, setSelectedFlight] = useState(null);

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["flights", { departureCity, destinationCity, departureDate, returnDate, passengers }],
    queryFn: fetchFlights,
    enabled: false,
  });

  const handleSearch = () => {
    refetch();
  };

  const handleBookNow = (flight) => {
    setSelectedFlight(flight);
  };

  return (
    <div className="container mx-auto space-y-8">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Search Flights</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Input placeholder="Departure City" value={departureCity} onChange={(e) => setDepartureCity(e.target.value)} />
          <Input placeholder="Destination City" value={destinationCity} onChange={(e) => setDestinationCity(e.target.value)} />
          <Calendar selected={departureDate} onSelect={setDepartureDate} className="w-full" />
          <Calendar selected={returnDate} onSelect={setReturnDate} className="w-full" />
          <Input type="number" placeholder="Passengers" value={passengers} onChange={(e) => setPassengers(e.target.value)} />
          <Button onClick={handleSearch}>Search</Button>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Search Results</h2>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error fetching flights</p>}
        {data && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((flight) => (
              <Card key={flight.id}>
                <CardHeader>
                  <CardTitle>{flight.airline}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Departure: {flight.departureTime}</p>
                  <p>Arrival: {flight.arrivalTime}</p>
                  <p>Price: ${flight.price}</p>
                  <Button onClick={() => handleBookNow(flight)}>Book Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>

      {selectedFlight && (
        <BookingConfirmation flight={selectedFlight} onClose={() => setSelectedFlight(null)} />
      )}
    </div>
  );
};

export default FlightSearch;