"use client"
import Link from 'next/link'


export default function Home() {


  return (
    <div className='h-screen bg-slate-900 flex flex-col items-center justify-center'>
      <h1 >
        Este es el Home
      </h1>
      {/* <Link href='/crear-producto' className='bg-amber-400 p-1 rounded-sm my-10'>{`Crear Producto >>>`}</Link> */}
    </div>
  )
}
