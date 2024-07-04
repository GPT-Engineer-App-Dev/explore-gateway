import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const BookingConfirmation = ({ flight, onClose }) => {
  const handleConfirmBooking = () => {
    // Logic to confirm booking
    console.log("Booking confirmed for flight:", flight);
    onClose();
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Booking Confirmation</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p>Airline: {flight.airline}</p>
          <p>Departure: {flight.departureTime}</p>
          <p>Arrival: {flight.arrivalTime}</p>
          <p>Price: ${flight.price}</p>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleConfirmBooking}>Confirm Booking</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BookingConfirmation;