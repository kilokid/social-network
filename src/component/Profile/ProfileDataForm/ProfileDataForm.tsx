import { useForm } from "react-hook-form";

import s from './ProfileDataForm.module.css';

import { ProfileType } from '../../../types/types}'
import { FC } from "react";

type PropsType = {
    profile: ProfileType,
    onSubmit: () => void,
}

const ProfileDataForm: FC<PropsType> = ({profile, onSubmit}) => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    return (
        <>
        <h3 className={s.title}>Edit profile info</h3>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <ul className={s.items_wrapper}>
                <li className={s.item}>
                    Full name:
                    <input
                    className={s.field}
                        {...register('fullName')}
                        type='text'
                        placeholder='Full name'
                        autocomplete="off"
                    />
                </li>
                <li className={s.item}>About me:
                    <textarea
                    className={s.field}
                        {...register('aboutMe')}
                        type='text'
                        placeholder='About me'
                        autocomplete="off"
                    />
                </li>
                <li className={s.item}>Looking for a job:
                    <input
                        {...register('lookingForAJob')}
                        type='checkbox'
                    />
                </li>
                <li className={s.item}>My professional skills:
                     <textarea
                     className={s.field}
                        {...register('lookingForAJobDescription')}
                        type='text'
                        placeholder='My professional skills'
                        autocomplete="off"
                    />
                </li>
                {Object.keys(profile.contacts).map(key => {
                    return <li className={s.item} key={key}>{key}:
                    <input
                    className={s.field}
                        {...register(`contacts.${key}`)}
                        type='text'
                        placeholder={key}
                        autocomplete="off"
                    />
                    {/* {profile.contacts[key]} */}
                    </li>
                })}
            </ul>
            <button className={s.save} type='submit'>Save</button>
        </form>
        </>
    )
}

export default ProfileDataForm;