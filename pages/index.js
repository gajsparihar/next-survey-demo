import Survey from "../components/Survey/Survey";

export default function Home() {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="w-full max-w-xl p-3">
        <Survey title="One League Quiz" />
      </div>
    </div>
  );
}
