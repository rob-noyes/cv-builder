import ContentPersonal from './ContentPersonal';

const Content = ({ cv }) => {
  return (
    <section id="resume">
      <ContentPersonal cv={cv} />
    </section>
  );
};

export default Content;
