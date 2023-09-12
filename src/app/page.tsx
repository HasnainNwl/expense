import AddNewTranstion from '@/components/AddNewTranstion';
import Header from '@/components/Header';
import Histroy from '@/components/Histroy';
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Header />
      <Histroy />
      <AddNewTranstion/>
    </>

  );
}
