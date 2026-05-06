import SignupCard from "../components/SignupCard";

export default function SignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-green-100 p-6">
      <div className="w-full max-w-xl rounded-2xl border border-black/10 bg-white p-8 shadow-lg">
        <SignupCard />
      </div>
    </div>
  );
}
