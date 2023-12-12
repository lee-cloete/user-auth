import Image from 'next/image';
import RegistrationForm from './components/RegistrationForm'; // Import your RegistrationForm component

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* ...Other existing content */}
      
      {/* Display the RegistrationForm component */}
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {/* ...Other links or content */}

        {/* Display the RegistrationForm component here */}
        <div className="lg:col-span-2 lg:row-span-2 p-8 bg-white dark:bg-black rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Registration</h2>
          <RegistrationForm /> {/* Render the RegistrationForm component */}
        </div>
      </div>
    </main>
  );
}
