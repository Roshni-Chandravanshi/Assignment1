import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is a simple Next.js application.</p>
      <Link href="/leaveApplication">
        <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Apply for Leave
        </a>
      </Link>
    </div>
  );
};

export default HomePage;