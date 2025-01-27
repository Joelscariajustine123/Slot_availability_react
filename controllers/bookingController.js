import { Student } from "../models/Students.js";
import { Course } from "../models/Course.js";
import { Slot } from "../models/slot.js";

export const createBooking = async (req, res) => {
    try {
        const { gcard, studentName, system ,slot} = req.body;
        console.log(gcard, studentName, system ,slot)
        const course = await Course.findOne({ name: "Web Development" });
        const s = await Slot.findOne({  });

        const student = new Student({
            gcard,
            studentName,
            system,
            slot
        })

        await student.save();
        res.status(201).json({ message: "Booking successful"});

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const updateBooking = async (req, res) => {
    try {
        // const { date, time, studentName, system } = req.body;
        // const bookingDate = new Date(date);
        
        // const booking = await Booking.findOne({ date: bookingDate });
        // if (!booking) {
        //     return res.status(404).json({ message: "Booking not found" });
        // }

        // const day = booking.days.find(d => d.day === dayNames[bookingDate.getDay()]);
        // if (!day) {
        //     return res.status(404).json({ message: "Day not found" });
        // }

        // const slot = day.slots.find(s => s.time === time);
        // if (!slot) {
        //     return res.status(404).json({ message: "Slot not found" });
        // }

        // slot.student = studentName;
        // slot.system = system;

        // await booking.save();
        res.json({ message: "Booking updated successfully"});

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete booking
export const deleteBooking = async (req, res) => {
    try {
        const { date, time } = req.body;
        // const bookingDate = new Date(date);
        
        // const booking = await Booking.findOne({ date: bookingDate });
        // if (!booking) {
        //     return res.status(404).json({ message: "Booking not found" });
        // }

        // const day = booking.days.find(d => d.day === dayNames[bookingDate.getDay()]);
        // if (!day) {
        //     return res.status(404).json({ message: "Day not found" });
        // }

        // const slotIndex = day.slots.findIndex(s => s.time === time);
        // if (slotIndex === -1) {
        //     return res.status(404).json({ message: "Slot not found" });
        // }

        // // Reset the slot to default values instead of removing it
        // day.slots[slotIndex].student = "unknown";
        // day.slots[slotIndex].system = "Desktop";

        // await booking.save();
        res.json({ message: "Booking deleted successfully" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}; 