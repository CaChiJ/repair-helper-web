const { db } = require("@vercel/postgres");
const { users, mechanics, repairRequests } = require("./placeholder-data.js");

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS users (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                phone VARCHAR(255) NOT NULL
            );
        `;

    console.log(`Created "users" table`);

    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        return client.sql`
                    INSERT INTO users (id, name, phone)
                    VALUES (${user.id}, ${user.name}, ${user.phone})
                    ON CONFLICT (id) DO NOTHING;
                `;
      })
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error("Error seeding users:", error);
    throw error;
  }
}

async function seedMechanics(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    //Create ENUM type
    // const createType = await client.sql`
    //         CREATE TYPE reliability AS ENUM ('dangerous', 'suspected', 'safe');
    //     `;

    const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS mechanics (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                address VARCHAR(255) NOT NULL,
                reliability reliability NOT NULL,
                rating SMALLINT NOT NULL
            );
        `;

    console.log(`Created "mechanics" table`);

    const insertedMechanics = await Promise.all(
      mechanics.map(async (mechanic) => {
        return client.sql`
                    INSERT INTO mechanics (id, name, address, reliability, rating)
                    VALUES (${mechanic.id}, ${mechanic.name}, ${mechanic.address}, ${mechanic.reliability}, ${mechanic.rating})
                    ON CONFLICT (id) DO NOTHING;
                `;
      })
    );

    console.log(`Seeded ${insertedMechanics.length} mechanics`);

    return {
        createTable,
        mechanics: insertedMechanics,
    };
  } catch (error) {
    console.error("Error seeding mechanics:", error);
    throw error;
  }
}

async function seedRepairRequest(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    
    console.log("start");
    const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS repair_requests (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                phone VARCHAR(255) NOT NULL,
                address VARCHAR(255) NOT NULL,
                mechanic_id VARCHAR(255) NOT NULL,
                is_on_site boolean NOT NULL,
                is_agreed boolean NOT NULL,
                reservation_date timestamp NOT NULL,
                created_at timestamp NOT NULL DEFAULT NOW(),
                is_booted boolean,
                is_powered boolean
            );
        `;

    console.log(`Created "repair_requests" table`);

    const insertedRepairRequests = await Promise.all(
      repairRequests.map(async (r) => {
        return client.sql`
                    INSERT INTO repair_requests (id, name, phone, address, mechanic_id, is_on_site, is_agreed, reservation_date, is_booted, is_powered)
                    VALUES (${r.id}, ${r.name}, ${r.phone}, ${r.address}, ${r.mechanic_id}, ${r.is_on_site}, ${r.is_agreed}, ${r.reservation_date}, ${r.is_booted}, ${r.is_powered})
                    ON CONFLICT (id) DO NOTHING;
                `;
      })
    );

    console.log(`Seeded ${insertedRepairRequests.length} repair requests`);

    return {
        createTable,
        repairRequests: insertedRepairRequests,
    };
  } catch (error) {
    console.error("Error seeding repairRequests:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedMechanics(client);
  await seedRepairRequest(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
