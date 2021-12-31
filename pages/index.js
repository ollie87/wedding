import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import ConfirmGuestForm from '../components/organisms/ConfirmGuestForm';

export default function Home() {
  const { t } = useTranslation('home')
  return (
    <div className="Home" data-testid="home">
      <h1>{ t('title') }</h1>
      <h2>{ t('hello') }</h2>
      <p>
        { t('this-works') }
      </p>
      <ConfirmGuestForm />
    </div>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['home']),
  },
})
