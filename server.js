const { json } = require('micro');
const { send } = require('micro');

// MongoDB connection
// Note: You might need to use a cloud-based database like MongoDB Atlas when deploying on Vercel
// Also, consider securing your connection string and using environment variables.
// mongoose.connect('mongodb://localhost:27017/talkcrate', { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = async (req, res) => {
  try {
    const { username, password } = await json(req);
    // Perform server-side validation and hash the password (for security)
    // For simplicity, this example does not include password hashing.
    // In a real-world scenario, you should never store passwords in plaintext.

    // MongoDB logic (replace with your own logic)
    // const newUser = new User({ username, password });
    // await newUser.save();

    res.status(201).send('User created successfully.');
  } catch (error) {
    console.error(error);
    send(res, 500, 'Internal Server Error');
  }
};
