import { useForm } from "react-hook-form";

const ProfileDataForm = ({profile, onSubmit}) => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3>{profile.fullName}</h3>
            <ul>
                <li>
                    <textarea
                        {...register('aboutMe')}
                        type='text'
                        placeholder='About me'
                    />
                </li>
                <li>Looking for a job:
                    <input
                        {...register('lookingJob')}
                        type='checkbox'
                    />
                </li>
                <li>
                     <textarea
                        {...register('skills')}
                        type='text'
                        placeholder='My professional skills'
                    />
                </li>
                {/* {Object.keys(profile.contacts).map(key => {
                    return <li key={key}>{key}: {profile.contacts[key]}</li>
                })} */}
            </ul>
            <button type='submit'>Save</button>
        </form>
    )
}

export default ProfileDataForm;