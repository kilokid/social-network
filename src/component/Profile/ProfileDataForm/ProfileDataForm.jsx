import { useForm } from "react-hook-form";

const ProfileDataForm = ({profile, onSubmit}) => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3>
                <input
                    {...register('fullName')}
                    type='text'
                    placeholder='Full name'
                />
            </h3>
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
                        {...register('lookingForAJob')}
                        type='checkbox'
                    />
                </li>
                <li>
                     <textarea
                        {...register('lookingForAJobDescription')}
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