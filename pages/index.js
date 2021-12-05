import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Quiz from "../components/Quiz/Quiz";

export default function Home() {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="w-full max-w-xl p-3">
        <Quiz title="One League Quiz" />
      </div>
    </div>
  );
}
