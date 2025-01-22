import { Schema, model } from "mongoose";
import reactionsSchema from "./Reaction.js";
const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => new Date(timestamp).toLocaleDateString()
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionsSchema]
}, {
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});
const Thought = model('thought', thoughtSchema);
export default Thought;
