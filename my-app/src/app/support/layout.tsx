export default function SupportLoginLayout(props: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <main>{props.children}</main>
    </div>
  );
}
