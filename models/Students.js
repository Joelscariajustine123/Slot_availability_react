import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: String,
    gcard: String,
    system: {
        type:Boolean,
        default:true
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Courses'
    },
    slot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Slots'
    }
})

const Student = mongoose.model('Students', studentSchema);

export { studentSchema, Student };
