export default function AdminLayout(props: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-500 min-h-screen">
      <main className="max-w-7xl mx-auto"> {props.children} </main>
    </div>
  );
}
