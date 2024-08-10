import jwt from "jsonwebtoken";

/**
 * Generate a JSON Web Token for a user
 * @param id The id of the user
 * @returns A JSON Web Token as a string
 */
const generateToken = (id: string): string => {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error("JWT_SECRET is not defined");
  }

  return jwt.sign({ id }, secret, {
    expiresIn: "30d",
  });
};

export default generateToken;
