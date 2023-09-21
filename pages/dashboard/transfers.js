import React from "react";
import contactsData from "@/src/data/transferContacts.json";
import Layout from "@/components/layout";
import Link from "next/link";

const transfers = () => {
  return (
    <Layout>
      <div
        style={{ width: 60 + "%" }}
        className="container py-3 mx-auto my-20 text-white text-center bg-rosa rounded"
      >
        <h3>¿A quién deseas transferir?</h3>
        <div className="container d-flex flex-col">
          {contactsData.map((user) => (
            <Link
              key={user.alias}
              className="btn btn-light my-1 mx-auto w-50"
              href={`/dashboard/transfer-to/${user.alias}`}
            >
              {user.name}
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default transfers;
