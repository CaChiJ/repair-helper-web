import Jwt from "jsonwebtoken";

export function generate(payload: any) {
  return Jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: "1h" });
}

export function verifyOrNull(token: string) {
  try {
    return Jwt.verify(token, process.env.JWT_SECRET!);
  } catch (error) {
    return null;
  }
}
