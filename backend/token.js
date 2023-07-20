import jwt from 'jsonwebtoken';

export const generateToket = (user) => {
  return jwt.sign(
    {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    },
    `${process.env.JWT_SECRET}`,
    {
      expiresIn: '30d',
    }
  );
};
