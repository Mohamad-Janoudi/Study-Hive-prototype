import { Navbar } from "@/components/Navbar";
import { AuthForm } from "@/components/AuthForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="grid min-h-[calc(100vh-65px)] place-items-center px-4 py-10 sm:px-6">
        <AuthForm mode="login" />
      </section>
    </main>
  );
}
