export default function StudentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <aside className="bg-gray-300 w-80 flex justify-center "></aside>
      <main>{children}</main>
    </>
  );
}
