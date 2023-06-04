import useFields from "../hooks/useFields"

const SignUpForm = () => {
    const [formData, handleChange, resetForm] = useFields({
        username: '',
        email: '', 
        password:''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        resetForm();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="username" 
                placeholder="username"
                value={formData.username}
                onChange={handleChange}
            />
            <input 
                type="text" 
                name="email" 
                placeholder="email"
                value={formData.email}
                onChange={handleChange}
            />
            <input 
                type="password" 
                name="password" 
                placeholder="password"
                value={formData.password}
                onChange={handleChange}
            />
            <button>Sign up</button>
        </form>
    )

}

export default SignUpForm;