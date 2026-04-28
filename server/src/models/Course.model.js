const courseSchema = new mongoose.Schema({
  title: String,
  description: String,

  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }],
  
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

export default mongoose.model("Course", courseSchema);