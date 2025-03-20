const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  tile: {
    type: String,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: [String],
  isPublished: {
    type: Boolean,
    default: false,
  },
  viewCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  timestamps: true,
});

// Add text for search functionality
blogSchema.index({ title: "text", content: "text", tags: "text" });

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
