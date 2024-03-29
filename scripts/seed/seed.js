const { db } = require("@vercel/postgres");
const { users, mechanics, repairRequests, bills } = require("./placeholder-data.js");

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
                repair_count INTEGER NOT NULL DEFAULT 0,
                year_of_career INTEGER NOT NULL,
                reliability reliability NOT NULL,
                rating SMALLINT NOT NULL
            );
        `;

    console.log(`Created "mechanics" table`);

    const insertedMechanics = await Promise.all(
      mechanics.map(async (mechanic) => {
        return client.sql`
                    INSERT INTO mechanics (id, name, address, repair_count, year_of_career, reliability, rating)
                    VALUES (${mechanic.id}, ${mechanic.name}, ${mechanic.address}, ${mechanic.repair_count}, ${mechanic.year_of_career}, ${mechanic.reliability}, ${mechanic.rating})
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
                is_powered boolean,
                os_type VARCHAR(255),
                device_type VARCHAR(255)
            );
        `;

    console.log(`Created "repair_requests" table`);

    const insertedRepairRequests = await Promise.all(
      repairRequests.map(async (r) => {
        return client.sql`
                    INSERT INTO repair_requests (id, name, phone, address, mechanic_id, is_on_site, is_agreed, reservation_date, is_booted, is_powered, os_type, device_type)
                    VALUES (${r.id}, ${r.name}, ${r.phone}, ${r.address}, ${r.mechanic_id}, ${r.is_on_site}, ${r.is_agreed}, ${r.reservation_date}, ${r.is_booted}, ${r.is_powered}, ${r.os_type}, ${r.device_type})
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

async function seedBills(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    
    console.log("start");

    const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS bills (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                created_at timestamp NOT NULL DEFAULT NOW(),
                repair_request_id VARCHAR(255) NOT NULL,
                image_url VARCHAR(255) NOT NULL,
                is_agreed BOOLEAN,
                price INTEGER NOT NULL
            );
        `;

    console.log(`Created "bills" table`);

    const insertedBills = await Promise.all(
      bills.map(async (b) => {
        return client.sql`
                    INSERT INTO bills (id, repair_request_id, image_url, is_agreed, price)
                    VALUES (${b.id}, ${b.repair_request_id}, ${b.image_url}, ${b.is_agreed}, ${b.price})
                    ON CONFLICT (id) DO NOTHING;
                `;
      })
    );

    console.log(`Seeded ${insertedBills.length} bills`);

    return {
        createTable,
        bills: insertedBills,
    };
  } catch (error) {
    console.error("Error seeding bills:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  // await seedUsers(client);
  // await seedMechanics(client);
  // await seedRepairRequest(client);
  // await seedBills(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
