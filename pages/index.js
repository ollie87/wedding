import ConfirmGuestForm from '../components/organisms/ConfirmGuestForm';

export default function Home() {
  return (
    <div className="Home flex flex-column" data-testid="home">
      <section className='flex basis-full justify-center'>
        <ConfirmGuestForm />
      </section>
    </div>
  );
};