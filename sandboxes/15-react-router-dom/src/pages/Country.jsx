import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Page from '../components/page';
import { fetchCountryByIsoCode } from '../services/fetch-country-by-iso-code';

const Country = () => {
  const { isoCode } = useParams();
  const navigate = useNavigate();

  const [country, setCountry] = useState();
  const [requestStatus, setRequestStatus] = useState('idle');

  useEffect(() => {
    fetchCountryByIsoCode(isoCode)
      .then((data) => {
        setCountry(data);
        setRequestStatus('success');
      })
      .catch(() => {
        setRequestStatus('error');
        navigate('/error');
      });
  }, [isoCode]);

  return (
    <Page>
      <h1>I am the country Page</h1>
      {requestStatus === 'error' && <p>Something went wrong 🙃</p>}
      {requestStatus === 'idle' && <p>Loading ... ⏳</p>}
      {requestStatus === 'success' && (
        <>
          <h3>{country.name.common}</h3>
          <picture>
            <img src={country.flags.svg} alt={country.name.common} />
          </picture>
        </>
      )}
    </Page>
  );
};

export default Country;
