import ConfirmGuestForm from '../components/organisms/ConfirmGuestForm';
import Date from '../components/organisms/Date';
import Header from '../components/organisms/Header';
import Invitation from '../components/organisms/Invitation';
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
        <Date />
      </section>
      <section className='flex basis-full justify-center'>
        <Invitation />
      </section>
      <section className='flex basis-full justify-center'>
        <ConfirmGuestForm />
      </section>
    </div>
  );
};