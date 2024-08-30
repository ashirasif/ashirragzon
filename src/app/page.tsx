import Link from "next/link";



export default async function Home() {
  
  const data = await fetch("https://fakestoreapi.com/products").then((res) => res.json())

  return (
    <main>
      <div className="grid grid-cols-4 gap-12">
        {
          data.map((product: any) => (
            <Link href={`/product/${product.id}`} className="flex flex-col gap-4 items-start hover:bg-slate-100" key={product.id}>
              <img src={product.image} className="h-40 self-center" alt={product.name} />
              <h2>{product.title}</h2>
              <p>{product.price} USD</p>
            </Link>
          ))
        }
      </div>
    </main>
  );
}
