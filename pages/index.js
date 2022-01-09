import ConfirmGuestForm from '../components/organisms/ConfirmGuestForm';
import Header from '../components/organisms/Header';
import Welcome from '../components/organisms/Welcome';

export default function Home() {
  return (
    <div className="Home flex flex-col" data-testid="home">
      <section className='flex basis-full justify-center'>
        <Header />
      </section>
      <section className='flex basis-full justify-center'>
        <Welcome />
      </section>
      <section className='flex basis-full justify-center'>
        <ConfirmGuestForm />
      </section>
    </div>
  );
};