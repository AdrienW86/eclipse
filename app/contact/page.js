import React from "react";
import Form from "@/components/Form/Form";
import Maps from "@/components/Maps/Maps";
import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.page}>
      {/* 👇 Ancre ici */}
      <div >
        <Form />
      </div>

      <Maps />
    </main>
  );
}


