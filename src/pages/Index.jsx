import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const Index = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('/placeholder.svg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold mb-4">Find Your Next Adventure</h1>
          <div className="flex space-x-4">
            <Input placeholder="Destination" className="w-48" />
            <Calendar selected={checkInDate} onSelect={setCheckInDate} className="w-48" />
            <Calendar selected={checkOutDate} onSelect={setCheckOutDate} className="w-48" />
            <Input placeholder="Guests" className="w-24" />
            <Button>Search</Button>
          </div>
        </div>
      </section>

      {/* Popular Destinations Section */}
      <section className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card key={item}>
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
              <CardHeader>
                <CardTitle>Destination {item}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Brief description of Destination {item}.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Packages Section */}
      <section className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Featured Packages</h2>
        <Carousel>
          <CarouselContent>
            {[1, 2, 3, 4].map((item) => (
              <CarouselItem key={item}>
                <Card>
                  <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
                  <CardHeader>
                    <CardTitle>Package {item}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Price: ${item * 100}</p>
                    <Button>Book Now</Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto flex justify-between">
          <div>
            <h3 className="font-bold">Quick Links</h3>
            <ul>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Follow Us</h3>
            <div className="flex space-x-4">
              <span>FB</span>
              <span>IG</span>
              <span>Twitter</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;