async function main() {
  const jwt = require('jsonwebtoken');

  const payload = {
    requestId: "6f2c2259-16ee-457c-86e3-dceba5530ee4",
  };

  const token = await jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
  console.log(`token: ${token}`);
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
