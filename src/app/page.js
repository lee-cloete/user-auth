/* @useClient */
'use client'
import ClientState from './state/client-state';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';

export default function Home() {
  const { activeTab, handleTabChange } = ClientState();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <div className="flex mb-8">
        <button
          className={`mr-4 px-4 py-2 rounded-md focus:outline-none ${activeTab === 'login' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => handleTabChange('login')}
        >
          Login
        </button>
        <button
          className={`px-4 py-2 rounded-md focus:outline-none ${activeTab === 'register' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => handleTabChange('register')}
        >
          Register
        </button>
      </div>

      {activeTab === 'login' && (
        <div className="mb-16 grid place-items-center">
          <div className="p-8 bg-white dark:bg-black rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            <LoginForm />  
          </div>
        </div>
      )}

      {activeTab === 'register' && (
        <div className="mb-16 grid place-items-center">
          <div className="p-8 bg-white dark:bg-black rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Register</h2>
            <RegistrationForm /> 
          </div>
        </div>
      )}

    </main>
  );
}
