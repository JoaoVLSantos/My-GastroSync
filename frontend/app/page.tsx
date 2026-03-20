import Image from "next/image";

export default function Home() {
  return (
    <main style={{padding: "40px"}}>
      <h1>GastroSync</h1>
      <p>Sistema de gestão gastronômica</p>

      <button style={{
        padding: "10px 20px",
        background: "#111827",
        color: "white",
        borderRadius: "8px",
        marginTop: "20px"
      }}>
        Entrar no sistema
      </button>
    </main>
  );
}
