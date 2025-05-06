const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    console.log('No token provided'); // Debug log
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET); // Extract token after "Bearer"
    console.log('Decoded Token:', decoded); // Debug log
    req.user = decoded;
    next();
  } catch (err) {
    console.error('Token Error:', err); // Debug log
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = auth;