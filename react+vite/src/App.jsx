import Card from "./components/Card";
import styles from "./App.module.css";
import React from "react";

export default function App() {

  
  return (
    <div className={styles.card}>
    <Card title="hello world"  surname="sisodia"/>
    <Card title="Ansh" surname="sisodia"/>
  <Card title="Anshul" surname="sisodia"/>
  <Card title="Aryan" surname="sharma"/>
    </div>
  )
}
