import { Schema, model, models } from 'mongoose';

const StudentSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
    },
    email: {
        type:String,
    },
    phone: {
        type:String
    },
    price: {
        type: Number,
        required: [true, 'School is required!'],
    },
    day: {
        type: String,
        required: [true, 'Day is required!'],
    },
    time: {
        type: String,
        required: [true, 'time is required!'],
    },
    cyclical : {
        type: Boolean,
        required: [true]
    },
    duration: {
        type: String,
        required: true
    }
    ,
    nextMeeting: {
        type: Date,
    },
    isPaid: {
        type: Boolean
    },
    joinDate: {
        type: Date,
    }
});
const ScheduleSchema = new Schema ({
    dayName : {
        type: String
    },
    studentsThisDay : [StudentSchema]
})

const MonthsSchema = new Schema( {
    month: {
        type: String,
    },
    allMeetings: [StudentSchema],
    lastMeetings: [StudentSchema],
})

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required!'],
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
    },
    image: {
        type: String,
    },
    role: {
        type: String,
    },
    target: {
        type: Number,
    },
    lessonPrice: {
        type: Number,
    },
    students: [StudentSchema],
    schedule: [ScheduleSchema],
    meetingHistory: [MonthsSchema]
});



const User = models.User || model("User", UserSchema);

export default User;
