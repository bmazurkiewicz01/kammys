import MainLayout from "../layout/MainLayout";

const About = () => {
  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-[#CEE5FD] to-white dark:from-[rgb(2,41,79)] dark:to-[rgba(9,14,16,0)] bg-no-repeat gradient-bg-size">
        <div className="pt-32">
          <h1>About Page</h1>
          <p>Welcome to the About page.</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
