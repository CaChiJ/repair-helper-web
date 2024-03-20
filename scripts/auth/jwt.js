async function main() {
  const jwt = require('jsonwebtoken');

  const payload = {
    requestId: "7ab3efa7-2218-4e67-b41f-78d2ae7f8d45",
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
