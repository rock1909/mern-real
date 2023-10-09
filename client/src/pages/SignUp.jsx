import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth.jsx';

export default function SignUp() {
    const [formData, setFormData] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData(
            {
                ...formData,
                [e.target.id]: e.target.value,
            });
    };
    const handleSubmit = async (e) => {
        e.preventDefault(); /* Prevents refreshing the page during signup */
        try {
            setLoading(true);
            const res = await fetch('/api/auth/signup', 
            {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
        
            const data = await res.json();
            console.log(data);
            if (data.success === false) {
                setLoading(false);
                setError(data.message);
                return;
            }
            setLoading(false);
            setError(null);
            navigate('/sign-in');
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }    
    };
    //console.log(formData);

  return (
    <div className='p-3 max-w-lg mx-auto'>
        <h1 className='text-3xl text-center font-semibold my-7'>
            Sign Up</h1>
        <div className='text-lg text-center mb-5'>
            <p>Get access to the lastest local listings</p>
            <p  className='text-sm'>Register to find your new home today!</p>
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <input 
            type='text' 
            placeholder='username' 
            className='border p-3 rounded-lg' 
            id='username' 
            onChange={handleChange} 
            />
            <input 
            type='email' 
            placeholder='email' 
            className='border p-3 rounded-lg' 
            id='email' onChange={handleChange} 
            />
            <input 
            type='password' 
            placeholder='password' 
            className='border p-3 rounded-lg' 
            id='password' 
            onChange={handleChange} 
            />
            <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
                {loading ? 'Loading...' : 'Sign Up'}
            </button>
            <OAuth/>
        </form>
        <div className='flex gap-3 mt-5'>
            <p>Already have and account?</p>
            <Link to={"/sign-in"}>
                <span className='text-blue-700'>Sign In</span>
            </Link>
        </div>
        {error && <p className='text-red-500 mt-5'>{error}</p>} 
    </div>
  )
}
