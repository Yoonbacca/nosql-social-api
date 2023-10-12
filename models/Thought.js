const { Schema, model, Types } = require("mongoose");
const moment = require("moment"); // module for date format
const userSchema = require("./User");
const reactionSchema = require("./Reaction");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (dateValue) => moment(dateValue).format("DD MM YYYY hh:mm:ss"),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reaction.length;
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
