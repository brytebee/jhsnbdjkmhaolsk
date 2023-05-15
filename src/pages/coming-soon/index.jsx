import React from 'react';
import { ComingSoon, ComingSoonNav } from '../../components';

const ComingSoonPage = () => {
  const [email, setEmail] = React.useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);

    setEmail('');
  };
  return (
    <div>
      <ComingSoonNav />
      <ComingSoon handleSubmit={handleSubmit} handleChange={handleChange} value={email} />
    </div>
  );
};

export default ComingSoonPage;
