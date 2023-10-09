import mongoose from 'mongoose';
	
	const userSchema = new mongoose.Schema({
		username: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		avatar: {
			type: String,
			default: "https://imgs.search.brave.com/qdCjYlJ38wgED0igJWjfmAQUtGyUtw6B65fwnpeX7QQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzA5LzAwLzY0/LzM2MF9GXzEwOTAw/NjQyNl8zODhQYWdx/aWVsZ2pGVEFNZ1c1/OWpSYURtUEp2U0JV/TC5qcGc",
		},
	}, 
	{ timestamps: true });

    const User = mongoose.model('User', userSchema);

    export default User;