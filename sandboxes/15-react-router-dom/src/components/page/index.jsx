import './index.css';

import Header from '../header';

const Page = ({ children }) => {
  return (
    <div className="page">
      <Header />
      <main>{children}</main>
      <footer>I am the footer</footer>
    </div>
  );
};

export default Page;
