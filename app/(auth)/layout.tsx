import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative h-screen w-full">
      <div className="absolute inset-0">
        <Image src="/images/bg-img.png" alt="background" layout="fill" className="object-cover" />
      </div>
      <div className="relative z-10">{children}</div>
    </main>
  );
}
