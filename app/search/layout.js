import Header from "./Header"

export default function SearchLayer({ children }) {
  return (
    <>
    <Header />
    <main>
    {children}
    </main>
    </>
  )
}